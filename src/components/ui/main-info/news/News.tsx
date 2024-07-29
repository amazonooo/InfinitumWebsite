import { FC } from 'react'
import Card from './Card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const News: FC = () => {
	const router = useRouter()

	const handleClick = () => {
		router.push('/news')
	}

  return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='text-center text-6xl font-semibold'>Новости</h1>
			<div className='flex flex-wrap items-center justify-center space-x-24 space-y-12 mt-16'>
				<Card />
			</div>
			<Link href={'/news'} onClick={handleClick} className='bg-[#8951ff] px-16 py-4 rounded-lg mt-12'>
				Смотреть все новости
			</Link>
		</div>
	)
}

export default News