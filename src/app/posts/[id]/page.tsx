import type { Metadata } from 'next'

import { postsService } from '@/services/posts.service'
import Post from './components/Post'

export interface IPostPage {
  params: { id: number }
}

export async function generateMetadata({ params }: IPostPage): Promise<Metadata> {
  const post = await postsService.getPostById(params.id)

  return {
    title: post?.theme || 'Новость'
  }
}

export default async function PostPage({ params }: IPostPage) {
  const post = await postsService.getPostById(params.id)

  return <Post post={post} />
}
