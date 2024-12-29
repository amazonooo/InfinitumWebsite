import Heading from '@/components/ui/Heading'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

export default function Faq() {
  return (
		<div className='mt-[60px] w-full'>
			<Heading
				title={'FAQ'}
				className='md:text-6xl mb-[60px] text-3xl xl:text-4xl font-bold'
			/>
			<div className='flex flex-col gap-y-[30px]'>
				<div className='w-full bg-main-black border border-primary-pink rounded-lg px-6 py-3'>
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger>
								Вместо лаунчера открывается архив
							</AccordionTrigger>
							<AccordionContent>
								Устойчивое будущее требует изменений на системном уровне,
								сильной государственной политики и новых технологий. Мы знаем,
								что ИИ может помочь решить некоторые из самых серьёзных проблем
								климата. Масштабирование искусственного интеллекта
								и его использование для ускорения борьбы с изменением климата
								будет столь же важным, как и устранение связанного
								с ним воздействия на окружающую среду.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>

				<div className='w-full bg-main-black border border-primary-pink rounded-lg px-6 py-3'>
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger>Другая проблема</AccordionTrigger>
							<AccordionContent>
								Устойчивое будущее требует изменений на системном уровне,
								сильной государственной политики и новых технологий. Мы знаем,
								что ИИ может помочь решить некоторые из самых серьёзных проблем
								климата. Масштабирование искусственного интеллекта
								и его использование для ускорения борьбы с изменением климата
								будет столь же важным, как и устранение связанного
								с ним воздействия на окружающую среду.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	)
}