import MainInfo from '@/components/ui/main-info/MainInfo'

export default function Home() {
  return (
		<main className='relative bg-[#161616] flex flex-auto justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip'>
      <div className='max-w-7xl w-full'>
        <MainInfo />
      </div>
    </main>
	)
}
