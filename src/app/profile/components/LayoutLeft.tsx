import Personalization from '@/components/ui/personalization/Personalization'
import Balance from '@/components/ui/balance/Balance'

export default function LayoutLeft() {
  return (
		<div className='flex flex-col'>
			<div className='z-[10] mb-20'>
				<Balance />
			</div>
			<Personalization />
			{/* <ServerStatistics /> */}
		</div>
	)
}