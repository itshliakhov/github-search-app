const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        screens: {
            'xsm': '320px',
            ...defaultTheme.screens,
        },
        extend: {},
    },
    plugins: [],
}
