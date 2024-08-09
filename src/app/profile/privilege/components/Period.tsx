import { FC } from 'react'

const Period: FC = () => {
  return (
		<div className='flex flex-col items-center gap-y-3'>
			<h2 className='text-lg text-center'>
				Выберите время действия "<span className='text-[#cbacf9]'>Премиум</span>
				"
			</h2>
			<div className='rounded-lg p-2 border border-white/[0.2]'>
        <div className='grid grid-cols-2 sm:flex sm:gap-x-10 md:gap-x-12 lg:gap-x-16'>
          <div className='cursor-pointer hover:bg-neutral-800 transition-colors duration-300 p-2 rounded-lg'>
            <p className='text-center'>1 Месяц</p>
          </div>
          <div className='cursor-pointer hover:bg-neutral-800 transition-colors duration-300 p-2 rounded-lg'>
            <p className='text-center'>3 Месяц</p>
          </div>
          <div className='cursor-pointer hover:bg-neutral-800 transition-colors duration-300 p-2 rounded-lg'>
            <p className='text-center'>6 Месяц</p>
          </div>
          <div className='cursor-pointer hover:bg-neutral-800 transition-colors duration-300 p-2 rounded-lg'>
            <p className='text-center'>Навсегда</p>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Period