
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Material Design 3 color tokens
				'md-primary': 'var(--md-sys-color-primary)',
				'md-on-primary': 'var(--md-sys-color-on-primary)',
				'md-primary-container': 'var(--md-sys-color-primary-container)',
				'md-on-primary-container': 'var(--md-sys-color-on-primary-container)',
				'md-surface': 'var(--md-sys-color-surface)',
				'md-on-surface': 'var(--md-sys-color-on-surface)',
				'md-surface-container': 'var(--md-sys-color-surface-container)',
				'md-surface-container-high': 'var(--md-sys-color-surface-container-high)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
				},
				'slide-left': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-left': 'slide-left 15s linear infinite'
			},
			fontSize: {
				'display-small': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '400' }],
				'display-medium': ['2.875rem', { lineHeight: '3.25rem', fontWeight: '400' }],
				'title-large': ['1.375rem', { lineHeight: '1.75rem', fontWeight: '400' }],
				'title-medium': ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }],
				'body-medium': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
				'label-large': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }]
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
