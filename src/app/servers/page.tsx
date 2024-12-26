import { Metadata } from 'next'
import ServerHero from './components/ServerHero'
import { ServerCards } from '@/components/ui/servers/ServerCards'
import { clientsService } from '@/services/clients.service'

export const metadata: Metadata = {
	title: 'Серверы',
}

export const relalidate = 600

async function getClients() {
	const data = await clientsService.getClients()

	return data
}

export default async function NewsPage() {
	const data = await getClients()
	return (
		<section className='h-full w-full flex flex-col overflow-x-clip max-w-[1440px] mx-auto px-5 sm:px-10'>
			<div className='flex flex-col items-center justify-center isolate z-[10]'>
				<ServerHero />
				<ServerCards clients={data} />
			</div>
		</section>
	)
}
