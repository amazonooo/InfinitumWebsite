'use client'

import { FC } from 'react'

const Hero: FC = () => {
  return (
		<div className='flex flex-col absolute top-[30%] px-44'>
			<h1 className='text-8xl font-medium leading-[125px] mb-5'>Infinitum</h1>
			<p className='text-2xl max-w-[620px] mb-24'>
				Испытай новый уровень удобства с инновационным лаунчером, объединяющим
				все игровые библиотеки одном интерфейсе
			</p>
			<button className='bg-[#8951F3] max-w-[215px] py-3 rounded-md text-xl'>
				Скачать
			</button>
		</div>
	)
}

export default Hero