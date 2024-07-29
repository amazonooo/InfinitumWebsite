import { FC } from 'react'
import FooterNav from '../ui/footer/FooterNav'

const Footer: FC = () => {
  return (
		<footer
			className='max-w-7xl w-full px-5 sm:px-10 xl:px-0 mx-auto overflow-x-clip pt-28 pb-10'
		>
			<FooterNav />
		</footer>
	)
}

export default Footer