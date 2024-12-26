import { postsService } from '@/services/posts.service'
import { IPosts, NewsResponse } from '@/types/posts.types'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface IInitialScrollNews {
	initialPosts: IPosts[]
	limit: number
}

export function useInitialScrollNews({
	initialPosts,
	limit,
}: IInitialScrollNews) {
	const router = useRouter()
	const searchParams = useSearchParams()

	const [posts, setPosts] = useState<IPosts[]>(initialPosts || [])
	const [page, setPage] = useState<number>(
		Number(searchParams.get('page') || 1)
	)
	const [loading, setLoading] = useState(false)
	const [hasMore, setHasMore] = useState(true)

	const { ref, inView } = useInView({
		threshold: 0.3,
	})

	async function loadMoreNews() {
		if (loading || !hasMore) return

		setLoading(true)
		try {
			const response: NewsResponse = await postsService.getPosts(
				page + 1,
				limit
			)

			if (response.data.length > 0) {
				setPosts(prevPosts => [...prevPosts, ...response.data])
				setPage(prevPage => prevPage + 1)
				setHasMore(page + 1 < response.pagination.totalPages)
			} else {
				setHasMore(false)
			}
		} catch (error) {
			console.error('Error fetching more posts: ', error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (inView) {
			loadMoreNews()
		}
	}, [inView])

	return { posts, ref, loading, hasMore, page, setPage }
}
