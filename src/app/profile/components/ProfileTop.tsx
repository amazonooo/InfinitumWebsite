import { FC } from 'react'

export interface IHeading {
	type?: 'Профиль' | 'Привелегии' | 'Пополнить' | 'Возможности' | 'История'
}

const ProfileTop: FC<IHeading> = ({ type }) => {
  return (
		<div className='mt-16 lg:mt-44 h-auto'>
			{/* <h1 className='Welcome-text text-center text-5xl md:text-6xl font-semibold'>
				Профиль
			</h1> */}
		</div>
	)
}

export default ProfileTop