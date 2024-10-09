import Slider from '../components/Slider'

export async function generateStaticParams() {
	const serverIds = ['1', '2']

	return serverIds.map((serverId) => ({
		serverId
	}))
}

export const revalidate = 60

const ServerDetail = ({params}: {
	params: {
		newsId: string
	}
}) => {
  return (
		<div className='h-full w-full flex flex-col justify-center overflow-x-clip'>
			<div className='flex flex-col items-center justify-center isolate z-[10]'>
				<Slider />
			</div>
		</div>
	)
}

export default ServerDetail