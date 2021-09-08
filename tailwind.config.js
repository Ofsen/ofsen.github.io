module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		colors: {
			light: 'var(--light)',
			blue: { dark: 'var(--blue-dark)', light: 'var(--blue-light)' },
			red: { dark: 'var(--red-dark)', light: 'var(--red-light)' },
			electric: 'var(--electric)',
		},
		fontFamily: {
			allison: ['Allison', 'cursive'],
			josefin: ['Josefin Sans', 'sans-serif'],
			inter: ['Inter', 'sans-serif'],
		},
		extend: {
			spacing: {
				0: '0',
				'1r': '1rem',
				'1.2r': '1.2rem',
				'1.4r': '1.4rem',
				'1.6r': '1.6rem',
				'1.8r': '1.8rem',
				'2r': '2rem',
				'3r': '3rem',
				'4r': '4rem',
				'm-0.8': '-0.8rem',
				'm-1': '-1rem',
				'm-1.2': '-1.2rem',
				'm-1.4': '-1.4rem',
				'm-1.6': '-1.6rem',
				'm-1.8': '-1.8rem',
				'm-2': '-2rem',
				'm-3': '-3rem',
				'm-4': '-4rem',
			},
			fontSize: {
				'2r': '2rem',
				'3r': '3rem',
				'4r': '4rem',
				'5r': '5rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
