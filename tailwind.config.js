/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        screens: {
            xs: '320px',
            xd: '375px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1281px',
            '2xl': '1536px',
            '3xl': '1800px',
        },
        extend: {
            colors: {
                black: '#191624',
                'purple-200': '#DAC7FC',
                'purple-300': '#CAACFF',
                'purple-500': '#6B49CD',
                'purple-700': '#5D0096',
                'purple-900': '#210035',
                'pink-500': '#AD26FF',
            },
            animation: {
                slideup: 'slideup 1s ease-in-out',
                slidedown: 'slidedown 1s ease-in-out',
                slideleft: 'slideleft 1s ease-in-out',
                slideright: 'slideright 1s ease-in-out',
                wave: 'wave 1.2s linear infinite',
                slowfade: 'slowfade 2.2s ease-in-out',
            },
            keyframes: {
                slowfade: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                slideup: {
                    from: { opacity: 0, transform: 'translateY(25%)' },
                    to: { opacity: 1, transform: 'none' },
                },
                slidedown: {
                    from: { opacity: 0, transform: 'translateY(-25%)' },
                    to: { opacity: 1, transform: 'none' },
                },
                slideleft: {
                    from: { opacity: 0, transform: 'translateX(-20px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                slideright: {
                    from: { opacity: 0, transform: 'translateX(20px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                wave: {
                    '0%': { transform: 'scale(0)' },
                    '50%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0)' },
                },
            },
        },
    },
};
