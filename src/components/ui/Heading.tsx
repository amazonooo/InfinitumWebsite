'use client'

import { cn } from '@/utils/cn'
import { FC } from 'react'

interface IHeading {
  title: any
  className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
  return (
    <h1 className={cn(
        'text-primary-pink text-center',
        className
      )}
    >
      {title}
    </h1>
  )
}

export default Heading