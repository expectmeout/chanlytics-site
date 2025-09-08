import fs from "fs"
import path from "path"

export type Post = {
  slug: string
  title: string
  excerpt: string
  author: string
  published: string // ISO date
  coverImage: string
  tags: string[]
  readingTime: string
  content?: string
}

const SEED_POSTS: Post[] = [
  {
    slug: "ai-agents-for-lead-capture",
    title: "AI Agents: From First Touch To Booked Appointment",
    excerpt:
      "How omni‑channel AI agents handle DMs, SMS, email, and calls to qualify leads and auto‑book on your calendar.",
    author: "Chanlytics Team",
    published: "2025-07-15",
    coverImage: "/images/blog/ai-agents.jpg",
    tags: ["AI Agents", "Booking", "Sales"],
    readingTime: "6 min",
    content:
      "Intro to AI agents and how they move prospects from first touch to booked appointments. Full article coming soon.",
  },
  {
    slug: "workflow-automations-that-close-loops",
    title: "Workflow Automations That Never Miss A Follow‑Up",
    excerpt:
      "Turn quotes, reminders, invoices, and review requests into automated flows that run 24/7.",
    author: "Chanlytics Team",
    published: "2025-07-02",
    coverImage: "/images/blog/automations.jpg",
    tags: ["Automations", "Operations"],
    readingTime: "5 min",
    content:
      "A practical view of full‑funnel automations that close loops across channels. Full article coming soon.",
  },
  {
    slug: "live-analytics-insights",
    title: "Live Analytics: See Conversations, Revenue, And Outcomes In One Place",
    excerpt:
      "What to track, how to attribute, and the dashboards that matter for AI‑driven sales.",
    author: "Chanlytics Team",
    published: "2025-06-20",
    coverImage: "/images/blog/analytics.jpg",
    tags: ["Analytics", "Insights"],
    readingTime: "7 min",
    content:
      "Metrics that matter for AI‑assisted sales and service teams. Full article coming soon.",
  },
  {
    slug: "integrations-that-just-work",
    title: "Works With Your Stack: HubSpot, Salesforce, Slack, And More",
    excerpt:
      "A practical guide to integrating Chanlytics with the tools you already use—without disruption.",
    author: "Chanlytics Team",
    published: "2025-05-28",
    coverImage: "/images/blog/integrations.jpg",
    tags: ["Integrations", "Playbooks"],
    readingTime: "4 min",
    content:
      "How Chanlytics fits into your stack with minimal change management. Full article coming soon.",
  },
]

const POSTS_JSON_PATH = path.join(process.cwd(), "content", "resources", "posts.json")

function readPostsFromDisk(): Post[] {
  try {
    if (!fs.existsSync(POSTS_JSON_PATH)) return []
    const raw = fs.readFileSync(POSTS_JSON_PATH, "utf8")
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed as Post[]
    return []
  } catch (e) {
    console.error("Failed to read posts.json:", e)
    return []
  }
}

function writePostsToDisk(posts: Post[]) {
  try {
    const dir = path.dirname(POSTS_JSON_PATH)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(POSTS_JSON_PATH, JSON.stringify(posts, null, 2), "utf8")
  } catch (e) {
    console.error("Failed to write posts.json:", e)
    throw e
  }
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export function getAllPosts() {
  // Disk posts override seed by slug
  const disk = readPostsFromDisk()
  const map = new Map<string, Post>()
  for (const p of SEED_POSTS) map.set(p.slug, p)
  for (const p of disk) map.set(p.slug, p)
  return Array.from(map.values()).sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
  )
}

export function getAllTags(): string[] {
  const set = new Set<string>()
  for (const p of getAllPosts()) for (const t of p.tags) set.add(t)
  return Array.from(set).sort((a, b) => a.localeCompare(b))
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

export function filterByTag(posts: Post[], tag?: string) {
  if (!tag) return posts
  return posts.filter((p) => p.tags.includes(tag))
}

export function paginate(posts: Post[], page: number, pageSize: number) {
  const total = posts.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const current = Math.min(Math.max(1, page), totalPages)
  const start = (current - 1) * pageSize
  const end = start + pageSize
  return {
    items: posts.slice(start, end),
    page: current,
    total,
    totalPages,
  }
}

export function upsertPost(newPost: Post) {
  const posts = getAllPosts()
  const idx = posts.findIndex((p) => p.slug === newPost.slug)
  if (idx >= 0) posts[idx] = newPost
  else posts.unshift(newPost)
  writePostsToDisk(posts)
  return newPost
}
