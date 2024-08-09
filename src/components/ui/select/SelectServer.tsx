import { FC } from 'react'

const SelectServer: FC = () => {
  return (
		<div className='flex flex-row w-fit'>
			<div className='flex-1'>
				<select
					className='cursor-pointer w-full border border-[#cbacf9]/50 bg-[#161616] rounded-lg text-white px-2 py-1'
					id='server'
				>
					<option value=''>Выберите сервер</option>
					<option>server 1</option>
					<option>server 2</option>
					<option>server 3</option>
					<option>server 4</option>
					<option>server 5</option>
					<option>server 6</option>
				</select>
			</div>
		</div>
	)
}

export default SelectServer