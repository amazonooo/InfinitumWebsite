'use client'

import { ArrowBigLeft, Diamond, ShoppingCart } from 'lucide-react'
import styles from './Card.module.css'
import { IDonateData } from './donateData'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Modal from '@/components/ui/modal/Modal'
import { toast, ToastContainer } from 'react-toastify'

export default function DonateCard({ title, Icon, count }: IDonateData) {
	const [isOpen, setIsOpen] = useState(false)
	const [step, setStep] = useState(1)
	const [selectedServer, setSelectedServer] = useState<string | null>(null)

	const servers = ['Сервер 1', 'Сервер 2', 'Сервер 3', 'Сервер 4', 'Сервер 5']

	const handleSelectServer = (server: string) => {
		setSelectedServer(server)
	}

	const handleContinue = () => {
		if(selectedServer) {
			setStep(step + 1)
		} else {
			toast.error('Выберите сервер')
		}
	}

  return (
		<>
			<article className={`${styles.card} group`}>
				<div className={`${styles.content} group-hover:border-primary-pink/50`}>
					<Diamond
						className='group-hover:text-primary-pink lg:text-white text-primary-pink'
						size={50}
					/>
					<h2>Донат статус</h2>
					<div className='bg-main-black border border-white/[0.2] p-3 flex items-center justify-center select-none rounded-lg Welcome-box Welcome-text'>
						{title}
					</div>
					<div className={styles.period}>
						<span className='Welcome-text'>{count}₽</span> / мес.
					</div>
					<Button onClick={() => setIsOpen(true)}>Приобрести</Button>
				</div>
			</article>
			{isOpen && (
				<Modal
					isOpen={isOpen}
					icon={<ShoppingCart className='text-primary-pink' />}
					onClose={() => setIsOpen(false)}
					header={`Покупка статуса ${title}`}
				>
					<div className='p-6 text-center'>
						<div className='flex items-center justify-center gap-x-2 mb-6 relative'>
							{step === 2 && (
								<div className='absolute -top-2.5 -left-3'>
									<ArrowBigLeft className='cursor-pointer hover:text-primary-pink transition-colors duration-300' size={25} onClick={() => setStep(1)} />
								</div>
							)}
							<div
								className={`border-white/[0.2] h-1 w-12 rounded-lg ${
									step === 1 ? 'bg-white animate-pulse' : 'bg-neutral-700'
								}`}
							></div>
							<div
								className={`border-white/[0.2] h-1 w-12 rounded-lg  ${
									step === 2 ? 'bg-white animate-pulse' : 'bg-neutral-700'
								}`}
							></div>
						</div>

						{step === 1 && (
							<div>
								<div className='bg-main-black border border-white/[0.2] flex items-center justify-center flex-col rounded-lg py-4 mb-6'>
									<h2 className='mb-8'>Выберите сервер</h2>
									<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
										{servers.map(server => (
											<Button
												key={server}
												onClick={() => handleSelectServer(server)}
												className={`border p-3 ${
													selectedServer === server
														? 'border border-primary-pink text-white'
														: 'border-white/20'
												} transition-all`}
											>
												{server}
											</Button>
										))}
									</div>
								</div>
								<Button onClick={handleContinue}>Продолжить</Button>
							</div>
						)}

						{step === 2 && (
							<div>
								<h2 className='text-2xl font-bold'>Подтверждение</h2>
								<p className='mt-4'>Выбранный сервер: {selectedServer}</p>
								<Button onClick={() => setIsOpen(false)} className='mt-6'>
									Завершить покупку
								</Button>
							</div>
						)}
					</div>
				</Modal>
			)}
		</>
	)
}