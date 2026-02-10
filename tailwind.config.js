/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-blue': '#153A80',
                'primary-dark': '#00449E',
                'secondary-bg': '#F3F7FF',
                'text-dark': '#1A1A1A',
                'text-gray': '#4A5568',
            },
            fontFamily: {
                sans: ['"Open Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
