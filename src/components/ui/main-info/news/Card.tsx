'use client'

import { FC } from 'react'
import { newsCard } from './newsCard'
import Image from 'next/image'

interface ICard {
  image: string
  name: string
  desc: string
}

const Card: FC = () => {
  return (
    <>
      {newsCard.map((news) => (
        <article key={news.image} className='flex flex-col max-w-[405px]'>
          <Image src={news.image} alt='news-img' width={407} height={369} className='mb-4' />
          <h1 className='mb-4 text-3xl font-bold'>{news.name}</h1>
          <p className='text-base font-medium'>{news.desc}</p>
        </article>
      ))}
    </>
  )
}

export default Card