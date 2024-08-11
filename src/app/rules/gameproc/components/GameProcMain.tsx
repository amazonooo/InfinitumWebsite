'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const GeneralMain: FC = () => {
	return (
		<motion.section initial='hidden' animate='visible'>
			<motion.div
				variants={slideInFromLeft(0.3)}
				className='relative rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'
			>
				<div className='p-8'>
					<h1 className='space-x-2 text-lg md:text-xl lg:text-2xl'>
						<span className='text-[#cbacf9] underline underline-offset-4 decoration-[2px] decoration-[#cbacf9]'>
							2.
						</span>
						<span>Игровой процесс</span>
					</h1>
					<div className='mt-8 flex flex-col'>
						<ul>
							<li className='p-6 bg-neutral-800/40 rounded-lg border border-white/30 flex flex-col md:flex-row gap-x-5 gap-y-3'>
								<h2 className='w-fit text-base md:text-lg lg:text-xl text-[#cbacf9]/80 underline underline-offset-4 decoration-[2px] decoration-[#cbacf9]/80'>
									2.1
								</h2>
								<div className='text-sm mt-0.5 flex flex-col gap-y-2'>
									<p>
										Каждый игрок, посетивший проект Infinitum, автоматически
										соглашается с данным сводом правил и политикой
										конфиденциальности. Администрация имеет право на
										редактирование правил в любое время суток без уведомления
										игроков. Незнание правил не освобождает от ответственности.
									</p>
									<p className='text-neutral-400'>
										В целях безопасности игроков и проекта при регистрации вы
										даёте согласие на обработку личных данных и личных сообщений
										на сайте и в игре, подробнее узнать об этом вы можете{' '}
										<a className='text-[#cbacf9]/80 underline underline-offset-4 decoration-1 decoration-[#cbacf9]/80'>
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
								<h2 className='w-fit text-base md:text-lg lg:text-xl text-[#cbacf9]/80 underline underline-offset-4 decoration-[2px] decoration-[#cbacf9]/80'>
									2.2
								</h2>
								<div className='text-sm mt-0.5 flex flex-col gap-y-2'>
									<p>
										Каждый игрок, посетивший проект Infinitum, автоматически
										соглашается с данным сводом правил и политикой
										конфиденциальности. Администрация имеет право на
										редактирование правил в любое время суток без уведомления
										игроков. Незнание правил не освобождает от ответственности.
									</p>
									<p className='text-neutral-400'>
										В целях безопасности игроков и проекта при регистрации вы
										даёте согласие на обработку личных данных и личных сообщений
										на сайте и в игре, подробнее узнать об этом вы можете{' '}
										<a className='text-[#cbacf9]/80 underline underline-offset-4 decoration-1 decoration-[#cbacf9]/80'>
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
							<li className='p-6 bg-neutral-800/40 rounded-lg border border-white/30 flex flex-col md:flex-row gap-x-5 gap-y-3'>
								<h2 className='w-fit text-base md:text-lg lg:text-xl text-[#cbacf9]/80 underline underline-offset-4 decoration-[2px] decoration-[#cbacf9]/80'>
									2.3
								</h2>
								<div className='text-sm mt-0.5 flex flex-col gap-y-2'>
									<p>
										Каждый игрок, посетивший проект Infinitum, автоматически
										соглашается с данным сводом правил и политикой
										конфиденциальности. Администрация имеет право на
										редактирование правил в любое время суток без уведомления
										игроков. Незнание правил не освобождает от ответственности.
									</p>
									<p className='text-neutral-400'>
										В целях безопасности игроков и проекта при регистрации вы
										даёте согласие на обработку личных данных и личных сообщений
										на сайте и в игре, подробнее узнать об этом вы можете{' '}
										<a className='text-[#cbacf9]/80 underline underline-offset-4 decoration-1 decoration-[#cbacf9]/80'>
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
								<h2 className='w-fit text-base md:text-lg lg:text-xl text-[#cbacf9]/80 underline underline-offset-4 decoration-[2px] decoration-[#cbacf9]/80'>
									2.4
								</h2>
								<div className='text-sm mt-0.5 flex flex-col gap-y-2'>
									<p>
										Каждый игрок, посетивший проект Infinitum, автоматически
										соглашается с данным сводом правил и политикой
										конфиденциальности. Администрация имеет право на
										редактирование правил в любое время суток без уведомления
										игроков. Незнание правил не освобождает от ответственности.
									</p>
									<p className='text-neutral-400'>
										В целях безопасности игроков и проекта при регистрации вы
										даёте согласие на обработку личных данных и личных сообщений
										на сайте и в игре, подробнее узнать об этом вы можете{' '}
										<a className='text-[#cbacf9]/80 underline underline-offset-4 decoration-1 decoration-[#cbacf9]/80'>
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
							<li className='p-6 bg-neutral-800/40 rounded-lg border border-white/30 flex flex-col md:flex-row gap-x-5 gap-y-3'>
								<h2 className='w-fit text-base md:text-lg lg:text-xl text-[#cbacf9]/80 underline underline-offset-4 decoration-[2px] decoration-[#cbacf9]/80'>
									2.5
								</h2>
								<div className='text-sm mt-0.5 flex flex-col gap-y-2'>
									<p>
										Каждый игрок, посетивший проект Infinitum, автоматически
										соглашается с данным сводом правил и политикой
										конфиденциальности. Администрация имеет право на
										редактирование правил в любое время суток без уведомления
										игроков. Незнание правил не освобождает от ответственности.
									</p>
									<p className='text-neutral-400'>
										В целях безопасности игроков и проекта при регистрации вы
										даёте согласие на обработку личных данных и личных сообщений
										на сайте и в игре, подробнее узнать об этом вы можете{' '}
										<a className='text-[#cbacf9]/80 underline underline-offset-4 decoration-1 decoration-[#cbacf9]/80'>
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
								<h2 className='w-fit text-base md:text-lg lg:text-xl text-[#cbacf9]/80 underline underline-offset-4 decoration-[2px] decoration-[#cbacf9]/80'>
									2.6
								</h2>
								<div className='text-sm mt-0.5 flex flex-col gap-y-2'>
									<p>
										Каждый игрок, посетивший проект Infinitum, автоматически
										соглашается с данным сводом правил и политикой
										конфиденциальности. Администрация имеет право на
										редактирование правил в любое время суток без уведомления
										игроков. Незнание правил не освобождает от ответственности.
									</p>
									<p className='text-neutral-400'>
										В целях безопасности игроков и проекта при регистрации вы
										даёте согласие на обработку личных данных и личных сообщений
										на сайте и в игре, подробнее узнать об этом вы можете{' '}
										<a className='text-[#cbacf9]/80 underline underline-offset-4 decoration-1 decoration-[#cbacf9]/80'>
											здесь
										</a>
										.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</motion.div>
		</motion.section>
	)
}

export default GeneralMain
