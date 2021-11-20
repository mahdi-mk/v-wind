const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        primary: {
            light: '#2563EB',
            DEFAULT: '#2563EB',
            dark: '#2563EB',
            hover: '#1D4ED8',
        },
        secondary: {
            light: '#4B5563',
            DEFAULT: '#4B5563',
            dark: '#1F2937',
            hover: '#374151'
        },
        danger: {
            light: '#DC2626',
            DEFAULT: '#DC2626',
            dark: '#DC2626',
            hover: '#B91C1C'
        },
        success: {
            light: '#047857',
            DEFAULT: '#047857',
            dark: '#047857',
            hover: '#065F46'
        },
        warning: {
            light: '#FBBF24',
            DEFAULT: '#FBBF24',
            dark: '#FBBF24',
            hover: '#F59E0B'
        },
    },
}

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors,
        fontFamily: {
            sans: ['"Inter"', 'sans-serif']
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}