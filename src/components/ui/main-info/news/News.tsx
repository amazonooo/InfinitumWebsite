'use client'

import React, { useEffect, useState } from 'react'
import { IPosts } from '@/types/posts.types'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { IoExitOutline } from 'react-icons/io5'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import { useQuery } from '@tanstack/react-query'
import { postsService } from '@/services/posts.service'
import { useInView } from 'react-intersection-observer'
import { Skeleton } from '../../skeleton'

export default function News() {
	const [page, setPage] = useState(1)
	const [isFetching, setIsFetching] = useState(false)

	const { ref, inView } = useInView({
		threshold: 0.3
	})

	const {
		data: posts,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ['posts', page],
		queryFn: () => postsService.getPosts(page)
	})

	const {} = useQuery({
		queryKey: ['posts', page],
		queryFn: () => postsService.getPosts(page)
	})

	useEffect(() => {
		const handleScroll = async () => {
			if (
				inView
			) {
				setIsFetching(true)
				setPage(prev => prev + 1)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isFetching])

	useEffect(() => {
		if (page > 1) {
			setIsFetching(false)
		}
	}, [page])

	return (
		<LazyMotion features={domAnimation}>
			{isLoading ? (
				<div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-12 items-center'>
					<Skeleton className='h-auto w-[300px] sm:w-[450px] md:w-[350px] lg:w-[425px] xl:w-[550px] rounded-lg ' />
				</div>
			) : (
				<m.div initial='hidden' animate='visible'>
					<m.div
						variants={slideInFromLeft(0.3)}
						className='grid grid-cols-1 md:grid-cols-2 py-8 gap-12 items-center'
					>
						{posts?.map((post: any) => (
							<Link
								ref={ref}
								href={`/posts/${post.id}`}
								className={cn(
									`flex group cursor-pointer flex-col h-auto w-[300px] sm:w-[450px] md:w-[350px] lg:w-[425px] xl:w-[550px] rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] transition-transform duration-550 hover:shadow-3xl hover:shadow-primary-pink/50 `
								)}
							>
								<div className='flex items-center justify-center border-b border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
									<Image
										src={post.previewImageUrl}
										alt='card-image'
										className='pointer-events-none h-40 sm:h-48 md:h-56 lg:h-60 xl:h-64 w-full object-contain rounded-xl'
										width={300}
										height={200}
									/>
								</div>
								<div className='flex items-end'>
									<div className='max-w-[80%] space-y-3 p-5 border-r border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
										<h1 className='text-2xl Welcome-text'>{post.theme}</h1>
										<p className='text-sm md:text-base'>{post.description}</p>
									</div>
									<div className='pb-5 pl-1 md:pl-2 flex items-center justify-center md:gap-x-2 gap-x-1 cursor-pointer '>
										<h3 className='group-hover:text-[#cbacf9] transition-all duration-450'>
											Читать
										</h3>
										<IoExitOutline className='-ml-3.5 opacity-0 group-hover:ml-0 group-hover:opacity-100 transition-all duration-450' />
									</div>
								</div>
							</Link>
						))}
					</m.div>
				</m.div>
			)}
		</LazyMotion>
	)
}
