import { FC } from 'react'
import { onlineCard } from './onlineCard'
import Card from './Card'

const Online: FC = () => {
  return (
		<aside className='pt-[8.8rem]'>
			<h1 className='text-2xl font-semibold'>Текущий онлайн</h1>
			<div className='flex flex-col mt-6 gap-y-2'>
        {onlineCard.map(card => (
          <Card image={card.image} name={card.name} count={card.count} />
        ))}
			</div>
		</aside>
	)
}

export default Online