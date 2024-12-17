import Link from 'next/link'
import { Button } from '../button'

interface ILink {
  href: string
  text: string
}

export default function LinkButton({ href, text }: ILink) {
  return (
    <Link href={href}>
      <Button size={'lg'}>{text}</Button>
    </Link>
  )
}