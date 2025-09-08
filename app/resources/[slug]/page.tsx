import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug, type Post } from "@/content/resources"

function titleCaseSlug(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const title = post?.title ?? titleCaseSlug(slug)
  const description = post?.excerpt ?? ""
  const images = post?.coverImage ? [post.coverImage] : []
  return {
    title: `${title} | Resources` ,
    description,
    openGraph: {
      title,
      description,
      images,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  }
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export default async function ResourcePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return notFound()

  const all = getAllPosts()
  const idx = all.findIndex((p) => p.slug === post.slug)
  const prev = idx > 0 ? all[idx - 1] : undefined
  const next = idx < all.length - 1 ? all[idx + 1] : undefined
  const related = all
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3)

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <nav className="text-xs mb-4 text-muted-foreground">
          <Link href="/resources" className="hover:underline">Resources</Link>
          <span className="mx-1">/</span>
          <span className="text-foreground">{post.title}</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">{post.title}</h1>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span>By {post.author}</span>
          <span>•</span>
          <time dateTime={post.published}>{new Date(post.published).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        {post.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Link key={t} href={`/resources?tag=${encodeURIComponent(t)}`} className="text-xs rounded-full border px-2.5 py-1 text-muted-foreground hover:bg-muted">
                {t}
              </Link>
            ))}
          </div>
        )}

        {/* Cover image */}
        <div className="mt-6">
          {post.coverImage ? (
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border bg-muted">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="100vw" />
            </div>
          ) : (
            <div className="aspect-[16/9] rounded-xl border bg-gradient-to-r from-[#0070F3]/10 to-[#38bdf8]/10" />
          )}
        </div>

        {/* Body */}
        <article className="prose prose-zinc dark:prose-invert max-w-none mt-8">
          <p className="lead text-muted-foreground">{post.excerpt}</p>
          {post.content && (
            <div className="mt-4 whitespace-pre-line">
              {post.content}
            </div>
          )}
        </article>

        {/* Prev / Next */}
        <div className="mt-12 flex justify-between gap-4">
          {prev ? (
            <Link href={`/resources/${prev.slug}`} className="group inline-flex flex-col rounded-lg border px-4 py-3 hover:bg-muted w-full">
              <span className="text-xs text-muted-foreground">← Previous</span>
              <span className="font-medium group-hover:text-primary">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/resources/${next.slug}`} className="group inline-flex flex-col rounded-lg border px-4 py-3 hover:bg-muted w-full text-right">
              <span className="text-xs text-muted-foreground">Next →</span>
              <span className="font-medium group-hover:text-primary">{next.title}</span>
            </Link>
          ) : <span />}
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-semibold mb-4">Related posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/resources/${rp.slug}`} className="rounded-lg border p-4 hover:bg-muted">
                  <div className="text-sm text-muted-foreground mb-1">{rp.tags[0]}</div>
                  <div className="font-medium text-foreground">{rp.title}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <Link href="/resources" className="text-primary hover:underline">← Back to resources</Link>
        </div>
      </div>
    </section>
  )
}
