import { InputHTMLAttributes } from 'react'
import { Loader } from '../loader/Loader'
import { cn } from '@/utils/cn'

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  className?: string
}

export function Button({ isLoading, children, className }: IButton) {
  return <button className={cn('bg-[#8951ff] rounded-lg transition-colors duration-300 py-2 px-5 hover:bg-[#8951ff]/80', className)}>{isLoading ? <Loader /> : children}</button>
}