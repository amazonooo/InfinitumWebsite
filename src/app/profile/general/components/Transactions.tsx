'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

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
				{transactions.slice(0, visibleCards).map((trans, index) => (
					<div
						key={index}
						className='p-4 border border-dark-pink rounded-lg flex justify-between items-center relative'
					>
						<div>{trans.date}</div>
						<div>{trans.cardNumber}</div>
						<div className='text-[#73FF7C]'>{trans.amount}</div>
					</div>
				))}

				<Button className='mt-4 w-full' size={'lg'} onClick={toggleCards}>
					{visibleCards >= transactions.length ? 'Свернуть' : 'Показать еще'}
				</Button>
			</div>
		</div>
	)
}