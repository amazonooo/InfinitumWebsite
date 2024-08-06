import { InputHTMLAttributes } from 'react'
import { Loader } from '../loader/Loader'

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

export function Button({ isLoading, children }: IButton) {
  return <button className='bg-[#8951ff] rounded-lg uppercase transition-colors duration-300 py-2 px-5 hover:bg-[#8951ff]/80'>{isLoading ? <Loader /> : children}</button>
}