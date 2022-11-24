import { ArticleLayout } from '@/components/ArticleLayout'
import postsApi from "@/api/posts"
import { postParameters } from "@/utilities/postUtilities"

export async function getStaticPaths() {
  const posts = await postsApi.getPosts();

  const postParams = postParameters(posts)

  return {
    paths: postParams,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const currentPost = await postsApi.getPost(context.params.slug)

  return {
    props: { post: currentPost },
  }
}

export default function Post({ post }) {

  const meta = {
    author: 'Spencer Sharp',
    date: post.createdDate,
    title: post.title,
    description: post.body,
  }

  return (
    <ArticleLayout meta={meta}>
      {post.body}
    </ArticleLayout>
  )
}
