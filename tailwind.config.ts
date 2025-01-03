import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
    	extend: {
    		colors: {
    			'primary-purple': '#8951ff',
    			'primary-pink': '#cbacf9',
    			'dark-pink': 'rgb(203 172 249 / 0.8)',
    			'dark-purple': 'rgb(137 81 255 / 0.8)',
    			'main-black': '#09090B'
    		},
    		screens: {
    			sm: '620px',
    			md: '767px',
    			lg: '951px',
    			xl: '1280px',
    			'2xl': '1536px'
    		},
    		keyframes: {
    			meteor: {
    				'0%': {
    					transform: 'rotate(215deg) translateX(0)',
    					opacity: '1'
    				},
    				'70%': {
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'rotate(215deg) translateX(-500px)',
    					opacity: '0'
    				}
    			},
    			'slide-up': {
    				'0%': {
    					transform: 'translateY(100%)'
    				},
    				'100%': {
    					transform: 'translateY(0)'
    				}
    			},
    			'slide-down': {
    				'0%': {
    					transform: 'translateY(0)'
    				},
    				'100%': {
    					transform: 'translateY(100%)'
    				}
    			},
    			'card-up': {
    				'0%': {
    					transform: 'translateY(10px)'
    				},
    				'100%': {
    					transform: 'translateY(10px)'
    				}
    			},
    			'card-down': {
    				'0%': {
    					transform: 'translateY(10px)'
    				},
    				'100%': {
    					transform: 'translateY(0)'
    				}
    			},
    			spin: {
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			shimmer: {
    				from: {
    					backgroundPosition: '0 0'
    				},
    				to: {
    					backgroundPosition: '-200% 0'
    				}
    			},
    			btnAnim: {
    				'0%': {
    					transform: 'translateX(0)'
    				},
    				'30%': {
    					transform: 'translateX(10px)'
    				},
    				'70%': {
    					transform: 'translateX(-10px)'
    				},
    				'100%': {
    					transform: 'translateX(0)'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'meteor-effect': 'meteor 5s linear infinite',
    			'slide-up': 'slide-up 0.3s ease',
    			'slide-down': 'slide-down 0.3s ease',
    			'card-up': 'card-up 0.8s ease',
    			'card-down': 'card-down 0.8s ease',
    			spin: 'spin 1.5s linear infinite',
    			shimmer: 'shimmer 2s linear infinite',
    			btnAnim: 'btnAnim .3s',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require('tailwindcss-animate')],
	darkMode: ['class', 'class'],
}
export default config;
