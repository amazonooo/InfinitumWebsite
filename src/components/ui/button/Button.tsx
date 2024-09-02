import { InputHTMLAttributes } from 'react'
import { Loader } from '../loader/Loader'
import { cn } from '@/utils/cn'

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  className?: string
  text?: string
}

export function Button({ isLoading, children, className, text}: IButton) {
  return (
		<button
			className={cn(
				'cursor-pointer inline-flex justify-center whitespace-nowrap rounded-lg text-xl font-medium bg-gradient-to-r from-primary-pink to-primary-purple shadow focus:outline-none focus-visible:outline-none relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]',
				className
			)}
		>
			{text}
			{isLoading ? <Loader /> : children}
		</button>
	)
}