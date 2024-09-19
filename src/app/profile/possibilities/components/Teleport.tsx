import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/Select"
import { HandHelping } from 'lucide-react'
import { FC } from 'react'

const Teleport: FC = () => {
  return (
		<div className='p-3 rounded-lg border border-[#cbacf9]/70 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'>
			<h1 className='text-center text-lg md:text-xl'>Телепортация на спавн</h1>
			<div className='mt-2 mb-1.5'>
				<div className='flex items-center justify-center'>
					<HandHelping size={75} className='text-[#cbacf9]' />
				</div>
				<h1 className='mb-2 text-center text-[18px]'>Вы застряли?</h1>
				<p className='text-center mb-8'>
					Попали в ловушку и не можете выбраться самостоятельно? Выберите сервер
					и моментально телепортируйтесь на спавн по кнопке ниже!
				</p>
				<div className='flex items-center justify-center'>
					<Select>
						<SelectTrigger className='w-[180px]'>
							<SelectValue placeholder='Выберите сервер' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Выберите сервер</SelectLabel>
								<SelectItem value='server1'>server1</SelectItem>
								<SelectItem value='server2'>server2</SelectItem>
								<SelectItem value='server3'>server3</SelectItem>
								<SelectItem value='server4'>server4</SelectItem>
								<SelectItem value='server5'>server5</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	)
}

export default Teleport