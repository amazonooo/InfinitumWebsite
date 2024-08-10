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
		name: 'Привилегии',
		link: '/profile/privilege',
	},
	{
		id: '3',
		name: 'Пополнение',
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

export const rules = [
	{
		id: '1',
		name: 'Общие правила',
		link: '/rules',
	},
	{
		id: '2',
		name: 'Игровой процесс',
		link: '/rules/gameproc',
	},
	{
		id: '3',
		name: 'Общение',
		link: '/rules/communication',
	},
	{
		id: '4',
		name: 'Строительство в мире',
		link: '/rules/construction',
	},
	{
		id: '5',
		name: 'Правила серверов',
		link: '/rules/serverrul',
	},
]