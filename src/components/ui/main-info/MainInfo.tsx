import { FC } from 'react'
import Online from './online/Online'
import News from './news/News'

const MainInfo: FC = () => {
  return (
		<section id='news' className='grid grid-cols-3 w-screen pt-12 pb-20 bg-gradient-to-b to-[#161616]'>
			<div className='col-span-2 max-w-[80vw]'>
				<News />
			</div>
			<aside className='col-span-1 max-w-[20vw]'>
				<Online />
			</aside>
		</section>
	)
}

export default MainInfo