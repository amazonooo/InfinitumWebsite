import { InputHTMLAttributes } from 'react'
import { Loader } from '../loader/Loader'
import { cn } from '@/utils/cn'

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  className?: string
}

export function Button({ isLoading, children, className }: IButton) {
  return <button className={cn('bg-primary-purple rounded-lg transition-colors duration-300 py-2 px-5 hover:bg-dark-purple', className)}>{isLoading ? <Loader /> : children}</button>
}