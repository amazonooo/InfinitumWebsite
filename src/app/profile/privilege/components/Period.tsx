'use client'

import { MainButton } from '@/components/ui/main-button/MainButton'
import { FC, useState } from 'react'

const Period: FC = () => {
	const [selectedPeriod, setSelectedPeriod] = useState<'1' | '3' | '6' | 'Навсегда'>('1')

  const prices = {
    '1': 99,
    '3': 449,
    '6': 899,
    'Навсегда' : 1499
  }

  const handleSelectPeriod = (period: '1' | '3' | '6' | 'Навсегда') => {
    setSelectedPeriod(period)
  }

  return (
		<div className='flex flex-col'>
			<div className='flex flex-col items-center gap-y-3'>
				<h2 className='text-lg text-center'>
					Выберите время действия "
					<span className='text-[#cbacf9]'>Премиум</span>"
				</h2>
				<div className='rounded-lg p-2 border border-white/[0.2]'>
					<div className='grid grid-cols-2 sm:flex sm:gap-x-5 gap-y-4 md:gap-x-6 lg:gap-x-8'>
						<button
							onClick={() => handleSelectPeriod('1')}
							className={`hover:bg-neutral-800 transition-colors duration-300 p-2 rounded-lg ${
								selectedPeriod === '1'
									? 'bg-neutral-800 border-white/[0.2]'
									: 'bg-transparent'
							}`}
						>
							1 Месяц
						</button>
						<button
							onClick={() => handleSelectPeriod('3')}
							className={`hover:bg-neutral-800 transition-colors duration-300 p-2 rounded-lg ${
								selectedPeriod === '3'
									? 'bg-neutral-800 border-white/[0.2]'
									: 'bg-transparent'
							}`}
						>
							3 Месяца
						</button>
						<button
							onClick={() => handleSelectPeriod('6')}
							className={`hover:bg-neutral-800 transition-colors duration-300 p-2 rounded-lg ${
								selectedPeriod === '6'
									? 'bg-neutral-800 border-white/[0.2]'
									: 'bg-transparent'
							}`}
						>
							6 Месяцев
						</button>
						<button
							onClick={() => handleSelectPeriod('Навсегда')}
							className={`hover:bg-neutral-800 transition-colors duration-300 p-2 rounded-lg ${
								selectedPeriod === 'Навсегда'
									? 'bg-neutral-800 border-white/[0.2]'
									: 'bg-transparent'
							}`}
						>
							Навсегда
						</button>
					</div>
				</div>
			</div>
			<div className='text-center mt-6'>
				<MainButton className='px-4 py-2'>Приобрести за {prices[selectedPeriod]} руб.</MainButton>
			</div>
		</div>
	)
}

export default Period