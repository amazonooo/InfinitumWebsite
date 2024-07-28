import { FC } from 'react'
import React from 'react'
import Image from 'next/image'

interface ICard {
  image: string
  name: string
  count: string
}

const Card: FC<ICard> = ({ image, name, count }) => {
	return (
		<article className='flex items-center relative'>
			<Image src={image} alt='online-logo' width={48} height={48} />
			<h1 className='pl-2'>{name}</h1>
			<div className='bg-[#8951ff] rounded-[10px] px-[10px] py-[5px] absolute top-[50%] translate-y-[-50%] right-0'>{count}</div>
		</article>
	)
}

export default Card