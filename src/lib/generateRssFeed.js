import ReactDOMServer from 'react-dom/server'
import { Feed } from 'feed'
import { mkdir, writeFile } from 'fs/promises'

import { getPosts } from "@/api/postsApi"

export async function generateRssFeed() {
  let posts = await getPosts()
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  let author = {
    name: 'Spencer Sharp',
    email: 'spencer@planetaria.tech',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  })

  for (let post of posts) {
    let url = `${siteUrl}/posts/${post.slug}`
    let html = ReactDOMServer.renderToStaticMarkup(
      <div>{post.body}</div>
    )

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.body,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(post.createdDate),
    })
  }

  await mkdir('./public/rss', { recursive: true })
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ])
}
