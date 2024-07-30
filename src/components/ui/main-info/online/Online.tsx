import { FC } from 'react'
import { onlineCard } from './onlineCard'
import Card from './Card'

const Online: FC = () => {
  return (
		<aside className='mt-[11.2rem] p-5 border border-white bg-[rgba(0,0,0,.3)]' style={{
			backdropFilter: 'blur(16px)'
		}}>
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