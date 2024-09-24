'use client'

import { m, domAnimation, LazyMotion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { newsIdData } from './newsIdData'

export default function NewsMain() {
  const { id } = useParams()
  const newsId = parseInt(id as string)
  const news = newsIdData.find((item) => item.id === newsId)

  if (!news) {
    return <div>Новость не найдена</div>
  }

  return (
		<LazyMotion features={domAnimation}>
			<m.section>
				<div className='news-detail max-w-4xl mx-auto p-4 space-y-8'>
					<h1 className='text-4xl font-bold text-center'>{news.title}</h1>

					<div className='news-header'>
						<img
							src={news.image}
							alt={news.title}
							className='w-full h-64 object-cover rounded-lg'
						/>
					</div>

					<div className='news-content text-center space-y-6'>
						<h2 className='text-3xl font-bold'>
							{news.subTitle || 'INFINITUM'}
						</h2>

						<p className='text-lg text-gray-400 leading-relaxed'>
							{news.content}
						</p>

						{/* Раздел с изображениями и дополнительными блоками */}
						<div className='additional-images grid grid-cols-1 md:grid-cols-2 gap-4'>
							<img
								src='/path-to-image1.jpg'
								alt='Доп. изображение 1'
								className='rounded-lg'
							/>
							<img
								src='/path-to-image2.jpg'
								alt='Доп. изображение 2'
								className='rounded-lg'
							/>
						</div>

						<p className='text-lg text-gray-400 leading-relaxed'>
							Таким образом реализация намеченных планов...
						</p>

						<div className='footer-image'>
							<img
								src='/path-to-footer-image.jpg'
								alt='Футер изображение'
								className='w-full h-64 object-cover rounded-lg'
							/>
						</div>
					</div>
				</div>
			</m.section>
		</LazyMotion>
	)
}