import { Metadata } from 'next'
import { SLIDE_CARD } from '../components/SLIDE_CARD'
import Image from 'next/image'

interface IServerDetails {
	params: { id: string }
}

async function fetchServerData(id: string) {
	const numericId = parseInt(id, 2)
	const servers = SLIDE_CARD.find(card => card.id === numericId)
	return servers || null
}

export async function generateMetadata({ params }: IServerDetails): Promise<Metadata> {
	const servers = await fetchServerData(params.id)

	if(!servers) {
		return {
			title: 'Сервер не найден'
		}
	}

	return {
		title: servers.title,
		description: servers.description
	}
} 

export async function generateStaticParams() {
	return SLIDE_CARD.map(server => ({ id: server.id.toString() }))
}

export default async function ServerDetail({ params }: { params: { serverId: string } }) {
	const server = await fetchServerData(params.serverId)

	if (!server) {
		return <h1>Сервер не найден</h1>
	}

  return (
		<div className='h-full w-full flex flex-col justify-center overflow-x-clip'>
			<div className='flex flex-col items-center justify-center isolate z-[10]'>
				<Image src={server.img} alt='img' width={300} height={200} />
				<h1>{server.title}</h1>
				<p>{server.description}</p>
			</div>
		</div>
	)
}