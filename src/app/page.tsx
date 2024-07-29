import Hero from '@/components/ui/hero/Hero'
import MainInfo from '@/components/ui/main-info/MainInfo'

export default function Home() {
  return (
		<main className='h-full w-full px-5 sm:px-10 flex flex-col '>
      <div className='flex flex-col gap-20'>
        <Hero />
        <MainInfo />
      </div>
    </main>
	)
}
