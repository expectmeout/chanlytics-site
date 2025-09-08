import { NextRequest, NextResponse } from "next/server"
import path from "path"
import fs from "fs/promises"
import { createWriteStream } from "fs"
import { pipeline } from "stream/promises"
import { fileURLToPath } from "url"
import { slugify, upsertPost, type Post } from "@/content/resources"

const BLOG_MEDIA_ROOT = path.join(process.cwd(), "public", "images", "blog")
const WEBHOOK_SECRET = process.env.N8N_WEBHOOK_SECRET

function ensureSecret(req: NextRequest) {
  const provided = req.headers.get("x-webhook-secret") || req.headers.get("x-n8n-signature")
  if (!WEBHOOK_SECRET || provided !== WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  return null
}

async function saveBufferToFile(filePath: string, data: Buffer) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
  await fs.writeFile(filePath, data)
}

async function saveFileFromWebReadable(filePath: string, webFile: File) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
  // @ts-ignore
  const stream = createWriteStream(filePath)
  // @ts-ignore
  await pipeline(webFile.stream(), stream)
}

function buildPostFromPayload(payload: any): Post {
  const now = new Date()
  const title: string = payload.title || "Untitled"
  const slug: string = payload.slug ? slugify(payload.slug) : slugify(title)
  const tags: string[] = Array.isArray(payload.tags)
    ? payload.tags.map((t: any) => String(t))
    : typeof payload.tags === "string"
    ? payload.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
    : []

  return {
    slug,
    title,
    excerpt: payload.excerpt || payload.description || "",
    author: payload.author || "Chanlytics Team",
    published: payload.published || now.toISOString(),
    coverImage: payload.coverImage || payload.cover_image || "",
    tags,
    readingTime: payload.readingTime || payload.reading_time || "5 min",
    content: payload.content || payload.body || "",
  }
}

export async function POST(req: NextRequest) {
  const unauthorized = ensureSecret(req)
  if (unauthorized) return unauthorized

  const contentType = req.headers.get("content-type") || ""

  try {
    if (contentType.includes("application/json")) {
      const payload = await req.json()
      let post = buildPostFromPayload(payload)

      // If images are provided as remote URLs, keep them as-is in coverImage.
      // If provided as base64, save to disk.
      if (payload.coverImageBase64) {
        const raw: string = String(payload.coverImageBase64 ?? "")
        if (raw) {
          const base64 = raw.includes(",") ? raw.split(",")[1] : raw
          const buf = Buffer.from(base64, "base64")
          const filePath = path.join(BLOG_MEDIA_ROOT, post.slug, "cover.jpg")
          await saveBufferToFile(filePath, buf)
          post.coverImage = `/images/blog/${post.slug}/cover.jpg`
        }
      }

      post = upsertPost(post)
      return NextResponse.json({ ok: true, post })
    }

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData()
      const payload: any = {}
      for (const [k, v] of form.entries()) {
        if (typeof v === "string") payload[k] = v
      }
      let post = buildPostFromPayload(payload)

      // Save files if present
      const cover = form.get("cover")
      if (cover && cover instanceof File) {
        const filePath = path.join(BLOG_MEDIA_ROOT, post.slug, "cover" + extFromFilename(cover.name))
        await saveFileFromWebReadable(filePath, cover)
        post.coverImage = filePathToPublic(filePath)
      }

      // Optionally accept additional images: images[]
      const images = form.getAll("images[]")
      if (images?.length) {
        let i = 1
        for (const img of images) {
          if (img instanceof File) {
            const filePath = path.join(BLOG_MEDIA_ROOT, post.slug, `image-${i}` + extFromFilename(img.name))
            await saveFileFromWebReadable(filePath, img)
            i++
          }
        }
      }

      post = upsertPost(post)
      return NextResponse.json({ ok: true, post })
    }

    return NextResponse.json({ error: "Unsupported content type" }, { status: 415 })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 })
  }
}

function extFromFilename(name: string) {
  const m = name.match(/\.[a-zA-Z0-9]+$/)
  return m ? m[0] : ".jpg"
}

function filePathToPublic(filePath: string) {
  const rel = path.relative(path.join(process.cwd(), "public"), filePath)
  return "/" + rel.split(path.sep).join("/")
}
