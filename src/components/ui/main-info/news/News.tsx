'use client'

import React from 'react'
import { newsCard } from './newsCard'
import Card from './Card'

export default function News() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-12'>
			{newsCard.map((card) => (
				<Card key={card.id} image={card.image} title={card.title} desc={card.desc} link={`/news/${card.id}`} id={card.id} />
			))}
		</div>
	)
}
