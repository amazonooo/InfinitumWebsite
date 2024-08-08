import Balance from '@/components/ui/balance/Balance'
import { FC } from 'react'

const LeftInfo: FC = () => {
  return (
		<div className='h-auto flex flex-col gap-y-5'>
			<Balance />
		</div>
	)
}

export default LeftInfo