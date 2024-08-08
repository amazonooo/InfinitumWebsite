import { FC } from 'react'
import Personalization from './RightInfo'
import AccountMoreInfo from './LeftInfo'
import LeftInfo from './LeftInfo'
import RightInfo from './RightInfo'

const AccountMain: FC = () => {
  return (
		<section className='mt-16 lg:mt-48 h-auto w-full'>
      <div className='flex lg:justify-between lg:items-start flex-col lg:flex-row gap-5'>
        <div className='lg:w-[60vw] order-1 lg:order-[-1]'>
          <LeftInfo />
        </div>
        <div className='lg:w-[40vw]'>
          <RightInfo />
        </div>
      </div>
		</section>
	)
}

export default AccountMain