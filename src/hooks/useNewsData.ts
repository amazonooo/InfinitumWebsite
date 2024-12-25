'use client'

import { newsService } from '@/services/news.service'
import { useQuery } from '@tanstack/react-query'

export function useNewsData() {
  const { data, isSuccess, isPending } = useQuery({
    queryKey:  ['news'],
    queryFn: () => newsService.getNews()
  })
  return { data, isSuccess, isPending }
}