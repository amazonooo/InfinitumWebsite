import { MENU } from './menu.data'
import MenuItem from './MenuItem'
import styles from '../Sidebar.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      {MENU.map((item) => (
        <MenuItem key={item.link} item={item} />
      ))}
    </nav>
  )
}