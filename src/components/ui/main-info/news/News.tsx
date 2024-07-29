import { FC } from 'react'
import Card from './Card'
import Link from 'next/link'

const News: FC = () => {
  return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='text-center text-6xl font-semibold'>Новости</h1>
			<div className='flex flex-wrap justify-between items-center gap-y-24 mt-16'>
				<Card />
			</div>
      <Link href={'/'} className='bg-[#8951ff] px-16 py-4 rounded-lg mt-12'>
        Смотреть все новости
      </Link>
		</div>
	)
}

export default News