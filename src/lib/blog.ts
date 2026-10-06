import { getCollection, type CollectionEntry } from "astro:content";

export async function getBlogPosts(includeDrafts = import.meta.env.DEV) {
  const now = new Date();
  const posts = await getCollection("blog", ({ data }) =>
    includeDrafts ? true : !data.draft && data.pubDate <= now,
  );
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export function formatPostDate(post: CollectionEntry<"blog">) {
  return new Intl.DateTimeFormat(post.data.lang === "es" ? "es-EC" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(post.data.pubDate);
}

export function readingMinutes(post: CollectionEntry<"blog">) {
  return Math.max(1, Math.ceil((post.body?.split(/\s+/).length ?? 0) / 200));
}
