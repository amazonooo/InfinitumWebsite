import { IPost } from '@/types/posts.types'

interface IPostItem {
  post: IPost
}

export default async function Post({ post }: IPostItem) {
	if (!post) {
		return <div>Новость не найдена</div>
	}

	return (
		<section className='h-full w-full flex flex-col max-w-[1440px] mx-auto px-5 sm:px-10'>
			<div className='py-8'>
				<h1 className='text-3xl font-bold'>{post.theme}</h1>
				<p className='text-gray-600'>
					{new Date(post.createdAt).toLocaleDateString()}
				</p>
				<img
					src={post.previewImageUrl}
					alt={post.theme}
					className='w-full h-auto mt-4 rounded-lg shadow-md'
				/>
				<p className='mt-6 text-lg'>{post.description}</p>
        <div>
          {post.content}
        </div>
        
			</div>
		</section>
	)
}