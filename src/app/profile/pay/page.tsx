import { FC } from 'react'
import PayMain from './components/PayMain'

const page: FC = () => {
  return (
		<section className='h-full w-full pt-16'>
			<div className='flex flex-col isolate z-[10] max-w-[1440px] mx-auto px-5 sm:px-10'>
				<PayMain />
			</div>
		</section>
	)
}

export default page