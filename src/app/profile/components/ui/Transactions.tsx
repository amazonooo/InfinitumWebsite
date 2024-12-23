'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { m, LazyMotion, domAnimation } from 'framer-motion'

export default function Transactions() {
  const transactions = [
		{
			date: '24.10.2024 - 11:02:57',
			cardNumber: 'xxxx-xxxx-xxxx-1234',
			amount: '267,82 ₽',
		},
		{
			date: '24.10.2024 - 11:02:57',
			cardNumber: 'xxxx-xxxx-xxxx-1234',
			amount: '302 ₽',
		},
		{
			date: '24.10.2024 - 11:02:57',
			cardNumber: 'xxxx-xxxx-xxxx-1234',
			amount: '302 ₽',
		},
		{
			date: '24.10.2024 - 11:02:57',
			cardNumber: 'xxxx-xxxx-xxxx-1234',
			amount: '302 ₽',
		},
		{
			date: '24.10.2024 - 11:02:57',
			cardNumber: 'xxxx-xxxx-xxxx-1234',
			amount: '302 ₽',
		},
		{
			date: '24.10.2024 - 11:02:57',
			cardNumber: 'xxxx-xxxx-xxxx-1234',
			amount: '302 ₽',
		},
		{
			date: '24.10.2024 - 11:02:57',
			cardNumber: 'xxxx-xxxx-xxxx-1234',
			amount: '302 ₽',
		},
		{
			date: '24.10.2024 - 11:02:57',
			cardNumber: 'xxxx-xxxx-xxxx-1234',
			amount: '302 ₽',
		},
	]

  const [visibleCards, setvisibleCards] = useState(3)

  const toggleCards = () => {
    if(visibleCards >= transactions.length) {
      setvisibleCards(3)
    } else {
      setvisibleCards(prev => prev + 3)
    }
  }
  
  return (
		<div className='w-full'>
			<div className='space-y-4'>
				<LazyMotion features={domAnimation}>
					{transactions.slice(0, visibleCards).map((trans, index) => (
						<m.div
							key={index}
							className='p-4 border border-primary-pink/60 rounded-lg flex justify-between items-center relative'
							initial={{ y: -20 }}
							animate={{ y: 0 }}
							transition={{ type: 'spring', stiffness: 200, damping: 21 }}
						>
							<div>{trans.date}</div>
							<div>{trans.cardNumber}</div>
							<div className='text-[#73FF7C]'>{trans.amount}</div>
						</m.div>
					))}
				</LazyMotion>

				{transactions.length > 3 ? (
					<Button className='mt-4 w-full' size={'lg'} onClick={toggleCards}>
						{visibleCards >= transactions.length ? 'Свернуть' : 'Показать еще'}
					</Button>
				) : ''}

			</div>
		</div>
	)
}