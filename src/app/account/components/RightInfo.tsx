import Personalization from '@/components/ui/personalization/Personalization'
import Safety from '@/components/ui/safety/Safety'
import { FC } from 'react'

const RightInfo: FC = () => {
  return (
		<div className='h-auto flex flex-col gap-y-5'>
      <Personalization />
			<Safety />
		</div>
	)
}

export default RightInfo