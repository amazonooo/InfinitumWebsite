'use client'

import { slideInFromTop } from '@/utils/motion'
// import { LazyMotion, m, domAnimation } from 'framer-motion'

import { FC } from 'react'

const GeneralMain: FC = () => {
	return (
		<div>
			<div className='relative rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B]'>
				<div className='p-8'>
					<h1 className='space-x-2 text-lg md:text-xl lg:text-2xl'>
						<span className='text-[#cbacf9] underline underline-offset-4 decoration-[2px] decoration-[#cbacf9]'>
							1.
						</span>
						<span>Основные правила</span>
					</h1>
					<div className='mt-8 flex flex-col'>
						<ul>
							<li className='p-6 bg-neutral-800/40 rounded-lg border border-white/[0.2] flex flex-col md:flex-row gap-x-5 gap-y-3'>
								<h2 className='w-fit text-base md:text-lg lg:text-xl text-dark-pink underline underline-offset-4 decoration-[2px] decoration-dark-pink'>
									1.1
								</h2>
								<div className='text-sm mt-0.5 flex flex-col gap-y-2'>
									<p>
										Каждый игрок, посетивший проект Infinitum, автоматически
										соглашается с данным сводом правил и политикой
										конфиденциальности. Администрация имеет право на
										редактирование правил в любое время суток без
										уведомления игроков. Незнание правил не освобождает от
										ответственности.
									</p>
									<p className='text-neutral-400'>
										В целях безопасности игроков и проекта при регистрации
										вы даёте согласие на обработку личных данных и личных
										сообщений на сайте и в игре, подробнее узнать об этом вы
										можете{' '}
										<a className='text-dark-pink underline underline-offset-4 decoration-1 decoration-dark-pink'>
											здесь
										</a>
										.
									</p>
								</div>
							</li>
						</ul>
					</div>

					<div className='mt-8 flex flex-col'>
						<ul>
							<li className='p-6 bg-tranparent rounded-lg border border-[#cbacf9]/40 flex flex-col md:flex-row gap-x-5 gap-y-3'>
								<h2 className='w-fit text-base md:text-lg lg:text-xl text-dark-pink underline underline-offset-4 decoration-[2px] decoration-dark-pink'>
									1.2
								</h2>
								<div className='text-sm mt-0.5 flex flex-col gap-y-2'>
									<p>
										Каждый игрок, посетивший проект Infinitum, автоматически
										соглашается с данным сводом правил и политикой
										конфиденциальности. Администрация имеет право на
										редактирование правил в любое время суток без
										уведомления игроков. Незнание правил не освобождает от
										ответственности.
									</p>
									<p className='text-neutral-400'>
										В целях безопасности игроков и проекта при регистрации
										вы даёте согласие на обработку личных данных и личных
										сообщений на сайте и в игре, подробнее узнать об этом вы
										можете{' '}
										<a className='text-dark-pink underline underline-offset-4 decoration-1 decoration-dark-pink'>
											здесь
										</a>
										.
									</p>
								</div>
							</li>
						</ul>
					</div>

					<div className='mt-8 flex flex-col'>
						<ul>
							<li className='p-6 bg-neutral-800/40 rounded-lg border border-white/[0.2] flex flex-col md:flex-row gap-x-5 gap-y-3'>
								<h2 className='w-fit text-base md:text-lg lg:text-xl text-dark-pink underline underline-offset-4 decoration-[2px] decoration-dark-pink'>
									1.3
								</h2>
								<div className='text-sm mt-0.5 flex flex-col gap-y-2'>
									<p>
										Каждый игрок, посетивший проект Infinitum, автоматически
										соглашается с данным сводом правил и политикой
										конфиденциальности. Администрация имеет право на
										редактирование правил в любое время суток без
										уведомления игроков. Незнание правил не освобождает от
										ответственности.
									</p>
									<p className='text-neutral-400'>
										В целях безопасности игроков и проекта при регистрации
										вы даёте согласие на обработку личных данных и личных
										сообщений на сайте и в игре, подробнее узнать об этом вы
										можете{' '}
										<a className='text-dark-pink underline underline-offset-4 decoration-1 decoration-dark-pink'>
											здесь
										</a>
										.
									</p>
								</div>
							</li>
						</ul>
					</div>

					<div className='mt-8 flex flex-col'>
						<ul>
							<li className='p-6 bg-transparent rounded-lg border border-[#cbacf9]/40 flex flex-col md:flex-row gap-x-5 gap-y-3'>
								<h2 className='w-fit text-base md:text-lg lg:text-xl text-dark-pink underline underline-offset-4 decoration-[2px] decoration-dark-pink'>
									1.4
								</h2>
								<div className='text-sm mt-0.5 flex flex-col gap-y-2'>
									<p>
										Каждый игрок, посетивший проект Infinitum, автоматически
										соглашается с данным сводом правил и политикой
										конфиденциальности. Администрация имеет право на
										редактирование правил в любое время суток без
										уведомления игроков. Незнание правил не освобождает от
										ответственности.
									</p>
									<p className='text-neutral-400'>
										В целях безопасности игроков и проекта при регистрации
										вы даёте согласие на обработку личных данных и личных
										сообщений на сайте и в игре, подробнее узнать об этом вы
										можете{' '}
										<a className='text-dark-pink underline underline-offset-4 decoration-1 decoration-dark-pink'>
											здесь
										</a>
										.
									</p>
								</div>
							</li>
						</ul>
					</div>

					<div className='mt-8 flex flex-col'>
						<ul>
							<li className='p-6 bg-neutral-800/40 rounded-lg border border-white/[0.2] flex flex-col md:flex-row gap-x-5 gap-y-3'>
								<h2 className='w-fit text-base md:text-lg lg:text-xl text-dark-pink underline underline-offset-4 decoration-[2px] decoration-dark-pink'>
									1.5
								</h2>
								<div className='text-sm mt-0.5 flex flex-col gap-y-2'>
									<p>
										Каждый игрок, посетивший проект Infinitum, автоматически
										соглашается с данным сводом правил и политикой
										конфиденциальности. Администрация имеет право на
										редактирование правил в любое время суток без
										уведомления игроков. Незнание правил не освобождает от
										ответственности.
									</p>
									<p className='text-neutral-400'>
										В целях безопасности игроков и проекта при регистрации
										вы даёте согласие на обработку личных данных и личных
										сообщений на сайте и в игре, подробнее узнать об этом вы
										можете{' '}
										<a className='text-dark-pink underline underline-offset-4 decoration-1 decoration-dark-pink'>
											здесь
										</a>
										.
									</p>
								</div>
							</li>
						</ul>
					</div>

					<div className='mt-8 flex flex-col'>
						<ul>
							<li className='p-6 bg-tranparent rounded-lg border border-[#cbacf9]/40 flex flex-col md:flex-row gap-x-5 gap-y-3'>
								<h2 className='w-fit text-base md:text-lg lg:text-xl text-dark-pink underline underline-offset-4 decoration-[2px] decoration-dark-pink'>
									1.6
								</h2>
								<div className='text-sm mt-0.5 flex flex-col gap-y-2'>
									<p>
										Каждый игрок, посетивший проект Infinitum, автоматически
										соглашается с данным сводом правил и политикой
										конфиденциальности. Администрация имеет право на
										редактирование правил в любое время суток без
										уведомления игроков. Незнание правил не освобождает от
										ответственности.
									</p>
									<p className='text-neutral-400'>
										В целях безопасности игроков и проекта при регистрации
										вы даёте согласие на обработку личных данных и личных
										сообщений на сайте и в игре, подробнее узнать об этом вы
										можете{' '}
										<a className='text-dark-pink underline underline-offset-4 decoration-1 decoration-dark-pink'>
											здесь
										</a>
										.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
)
}

export default GeneralMain