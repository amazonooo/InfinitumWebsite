import Link from 'next/link'
import { IMenuItem } from './menu.data'
import Image from 'next/image'
import styles from '../Sidebar.module.scss'
import { useAtomValue } from 'jotai'
import { isCollapsedAtom } from '@/store/sidebar-store'
import cn from 'clsx'

export default function MenuItem({ item }: { item: IMenuItem }) {
  const isCollapsed = useAtomValue(isCollapsedAtom)

  return (
		<Link href={item.link} className={cn(styles.link, 'group')}>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2.5'>
					<Image src={item.image} alt='server' width={30} height={30} />
					{!isCollapsed && <span className='group-hover:translate-x-1.5 transition-transform duration-300 ease-in-out'>{item.name}</span>}
				</div>
				{!isCollapsed && (
					<div className='Welcome-box rounded-md p-1.5'>{item.count}</div>
				)}
			</div>
		</Link>
	)
}