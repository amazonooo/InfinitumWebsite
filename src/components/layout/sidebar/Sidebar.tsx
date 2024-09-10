'use client'

import Menu from './menu/Menu'
import styles from './Sidebar.module.scss'
import { useAtom } from 'jotai'
import { isCollapsedAtom } from '@/store'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import cn from 'clsx'
import { useMediaQuery } from 'react-responsive'
import { SidebarDemo } from '@/components/ui/sidebarTest/SidebarTest'
import { usePathname } from 'next/navigation'
import { Play } from 'lucide-react'

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

	const isDesktop = useMediaQuery({ minWidth: 951 })

	const pathname = usePathname()

  return (
		<>
			{pathname === '/' ? (
				<>
					{isDesktop && (
						<LazyMotion features={domAnimation}>
							<m.aside
								className={cn(styles.sidebar, {
									[styles.collapsed]: isCollapsed,
								})}
								animate={{ width: isCollapsed ? 60 : 320 }}
								transition={{ type: 'spring', stiffness: 200, damping: 21 }}
								onMouseEnter={toggleSidebar}
								onMouseLeave={toggleSidebar}
							>
								{/* <button
									className={styles.toggle}
								>
									{isCollapsed ? <PanelLeftClose /> : <PanelLeftOpen />}
								</button> */}
								<h2 className={`${styles.toggle} flex items-center gap-x-1.5`}>
									1200
									<span>
										<Play size={15} className={`${isCollapsed ? 'hidden' : 'visible text-primary-pink'}`} />
									</span>
								</h2>
								<Menu />
							</m.aside>
						</LazyMotion>
					)}
					{!isDesktop && (
						<LazyMotion features={domAnimation}>
							<SidebarDemo />
						</LazyMotion>
					)}
				</>
			) : (
				''
			)}
		</>
	)
}