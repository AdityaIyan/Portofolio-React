/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#e3f2fd',
                'dark-light': '#ffffff',
                accent: '#1976d2',
                'accent-light': '#42a5f5',
                slate: {
                    200: '#1a1a1a',
                    300: '#333333',
                    400: '#666666',
                    500: '#888888',
                    600: '#999999',
                    700: '#bbdefb',
                }
            },
            fontFamily: {
                'mono': ['Fira Code', 'monospace'],
                'sans': ['Calibre', 'Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
