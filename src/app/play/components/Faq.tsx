import Heading from '@/components/ui/Heading'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

export default function Faq() {
  return (
		<div className='pt-[100px]'>
			<Heading title={'FAQ'} className='text-6xl mb-[60px] font-bold' />
			<div className='flex flex-col gap-y-[30px]'>
				<div className='w-full bg-main-black border border-primary-pink rounded-lg px-6 py-3'>
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger>Is it accessible?</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>

				<div className='w-full bg-main-black border border-primary-pink rounded-lg px-6 py-3'>
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger>Is it accessible?</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	)
}