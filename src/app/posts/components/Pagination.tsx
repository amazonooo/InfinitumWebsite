'use client'

import { Button } from '@/components/ui/button'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface IPagination {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: IPagination) {
  const router = useRouter()

  const handlePrevious = () => {
		if (currentPage > 1) {
			const newPage = currentPage - 1
			onPageChange(newPage)
			router.push(`/posts?page=${newPage}&limit=8`)
		}
	}

	const handleNext = () => {
		if (currentPage < totalPages) {
			const newPage = currentPage + 1
			onPageChange(newPage)
			router.push(`/posts?page=${newPage}&limit=8`)
		}
	}

  return (
		<div className='flex items-center justify-center gap-x-3 mt-6'>
			<Button
				className='disabled:opacity-50'
				onClick={handlePrevious}
				disabled={currentPage === 1}
			>
				<ArrowBigLeft />
			</Button>
			<span className='text-zinc-200'>
				Страница {currentPage} из {totalPages}
			</span>
			<Button
				className='disabled:opacity-50'
				onClick={handleNext}
				disabled={currentPage === totalPages}
			>
				<ArrowBigRight />
			</Button>
		</div>
	)
}