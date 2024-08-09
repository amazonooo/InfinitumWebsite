export interface ILinks {
  id: string
  name: string
  link: string
}

export const links = [
	{
		id: '1',
		name: 'Профиль',
		link: '/profile',
	},
	{
		id: '2',
		name: 'Привелегии',
		link: '/profile/privilege',
	},
	{
		id: '3',
		name: 'Пополнить',
		link: '/profile/pay',
	},
	{
		id: '4',
		name: 'Возможности',
		link: '/profile/possibilities',
	},
	{
		id: '5',
		name: 'История',
		link: '/profile/history',
	},
]