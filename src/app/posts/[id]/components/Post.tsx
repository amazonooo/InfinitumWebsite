import { IPost } from '@/types/posts.types'
import Image from 'next/image'

interface IPostItem {
  post: IPost
}

export default async function Post({ post }: IPostItem) {
	if (!post) {
		return <div>Новость не найдена</div>
	}

	return (
		<section className='h-full w-full flex flex-col max-w-[1440px] mx-auto px-5 sm:px-10'>
			<div className='flex flex-col items-center jc isolate z-[10]'>
				<div className='mt-16 lg:mt-40'>
					<h1 className='text-primary-pink text-4xl md:text-6xl font-semibold text-center'>
						{post.theme}
					</h1>
					<div className='bg-main-black border border-white/20 rounded-lg p-12 mt-12 flex items-center justify-center flex-col'>
						<Image
							src={post.previewImageUrl}
							alt={post.theme}
							width={300}
							height={300}
							className='rounded-lg'
						/>
						<p className='text-zinc-200 mt-16 text-2xl'>
							{new Date(post.createdAt).toLocaleDateString()}
						</p>
						<div className='mt-12 text-4xl'>{post.content}</div>
					</div>
				</div>
			</div>
		</section>
	)
}