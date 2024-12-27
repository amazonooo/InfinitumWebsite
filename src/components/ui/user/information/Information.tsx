'use client'

export default function Information() {
  return (
		<div className='rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B]'>
			<div className='py-7 px-3 md:px-5 lg:px-7 xl:px-8'>
				<h1 className='text-center Welcome-text text-3xl xl:text-4xl font-bold mb-9'>
					Информация
				</h1>
				<div className='flex items-center md:lg:items-start flex-col md:flex-row justify-between w-full gap-y-8 md:gap-y-0'>
					<div className='Welcome-box w-full md:w-[48%] h-[200px]'>
						<div className='py-4 w-full'>
							<h1 className='text-center text-xl xl:text-2xl font-medium mb-8'>
								Транзакции
							</h1>
							<p className='text-center text-3xl text-primary-pink'>
								В разработке
							</p>
						</div>
					</div>
					<div className='Welcome-box w-full md:w-[48%] h-[200px]'>
						<div className='py-4 w-full'>
							<h1 className='text-center text-xl xl:text-2xl font-medium mb-8'>
								Нарушения
							</h1>
							<p className='text-center text-3xl text-primary-pink'>
								В разработке
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}