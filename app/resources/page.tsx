import Link from "next/link"
import Image from "next/image"
import { getAllPosts, getAllTags, filterByTag, paginate, type Post } from "@/content/resources"

// using Post type from content/resources

const PAGE_SIZE = 9

function getQueryParams(searchParams: { [key: string]: string | string[] | undefined }) {
  const tag = typeof searchParams.tag === "string" ? searchParams.tag : undefined
  const pageRaw = typeof searchParams.page === "string" ? searchParams.page : "1"
  const page = Number.isNaN(Number(pageRaw)) ? 1 : Math.max(1, parseInt(pageRaw))
  return { tag, page }
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  } catch {
    return iso
  }
}

export default function ResourcesPage({ searchParams = {} as any }: { searchParams?: Record<string, string> }) {
  const { tag, page } = getQueryParams(searchParams)
  const all = getAllPosts()
  const filtered = filterByTag(all, tag)
  const { items, totalPages } = paginate(filtered, page, PAGE_SIZE)
  const tags = getAllTags()

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mx-auto text-center">
          <p className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-primary border-primary/20 bg-primary/5">
            Resources & Insights
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Learn How AI Assistants Drive Revenue
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
            Practical guides, playbooks, and case studies on omni‑channel AI agents, workflow automations, and live analytics.
          </p>
        </header>

        {/* Tag filters */}
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          <Link href={`/resources`} className={`text-xs rounded-full border px-3 py-1 ${!tag ? "bg-primary/10 border-primary/20" : "hover:bg-muted"}`}>All</Link>
          {tags.map((t) => (
            <Link key={t} href={`/resources?tag=${encodeURIComponent(t)}`} className={`text-xs rounded-full border px-3 py-1 ${tag === t ? "bg-primary/10 border-primary/20" : "hover:bg-muted"}`}>
              {t}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((post: Post) => (
            <article
              key={post.slug}
              className="group rounded-xl border bg-card text-card-foreground overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link href={`/resources/${post.slug}`} className="block">
                <div className="relative aspect-[16/9] bg-muted">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      By {post.author} • {post.readingTime}
                    </span>
                    <time dateTime={post.published}>{formatDate(post.published)}</time>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1
              const href = `/resources?${new URLSearchParams({ ...(tag ? { tag } : {}), page: String(p) }).toString()}`
              const active = p === page
              return (
                <Link key={p} href={href} className={`min-w-8 text-center rounded-md border px-3 py-1 text-sm ${active ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>
                  {p}
                </Link>
              )
            })}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Explore all posts
          </Link>
        </div>
      </div>
    </section>
  )
}
