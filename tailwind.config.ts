import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '620px',
			md: '767px',
			// 1024 !!!
			lg: '951px',
			xl: '1280px',
			'2xl': '1536px',
		},
		keyframes: {
			meteor: {
				'0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
				'70%': { opacity: '1' },
				'100%': {
					transform: 'rotate(215deg) translateX(-500px)',
					opacity: '0',
				},
			},
			'slide-up': {
				'0%': { transform: 'translateY(100%)', opacity: '0' },
				'100%': { transform: 'translateY(0)', opacity: '1' },
			},
			'slide-down': {
				'0%': { transform: 'translateY(0)', opacity: '1' },
				'100%': { transform: 'translateY(100%)', opacity: '0' },
			},
			'card-up': {
				'0%': { transform: 'translateY(10px)' },
				'100%': { transform: 'translateY(10px)' },
			},
			'card-down': {
				'0%': { transform: 'translateY(10px)' },
				'100%': { transform: 'translateY(0)' },
			},
			'spin': {
				'100%': { transform: 'rotate(360deg)' }
			}
		},
		animation: {
			'meteor-effect': 'meteor 5s linear infinite',
			'slide-up': 'slide-up 0.3s ease',
			'slide-down': 'slide-down 0.3s ease',
			'card-up': 'card-up 0.8s ease',
			'card-down': 'card-down 0.8s ease',
			'spin': 'spin 1.5s linear infinite',
		},
	},
	plugins: [],
	darkMode: 'class',
}
export default config;
