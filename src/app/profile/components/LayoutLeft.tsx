import Personalization from '@/components/ui/personalization/Personalization'
import Balance from '@/components/ui/balance/Balance'

export default function LayoutLeft() {
  return (
		<div className='flex flex-col'>
			<Personalization />
			<div className='z-[10] mt-[100px]'>
				<Balance />
			</div>
			{/* <ServerStatistics /> */}
		</div>
	)
}