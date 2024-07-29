'use client'

import { FC } from 'react'
import Online from './online/Online'
import News from './news/News'

const MainInfo: FC = () => {
  return (
		<section
			id='news'
			className='grid grid-cols-4 relative'
		>
			<div className='col-span-3'>
				<News />
			</div>
			<aside className='col-span-1' aria-label='sidebar'>
				<Online />
			</aside>
		</section>
	)
}

export default MainInfo