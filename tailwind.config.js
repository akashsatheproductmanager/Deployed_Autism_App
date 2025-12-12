/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                // Add OpenDyslexic if available, otherwise fallback
                dyslexic: ['OpenDyslexic', 'Open Sans', 'sans-serif'],
            },
            colors: {
                // Primary: Muted Greens (Nature, Calmness)
                primary: {
                    50: '#f2f8f5',
                    100: '#e1efe8',
                    200: '#c5dec9',
                    300: '#9ec4a5',
                    400: '#75a882',
                    500: '#5c9a7e', // Core Brand Color
                    600: '#467a63',
                    700: '#355c4b',
                    800: '#274136',
                    900: '#1a2b24',
                },
                // Secondary: Soft Blues (Relaxation, Focus)
                secondary: {
                    50: '#f0f7ff',
                    100: '#e0effe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7', // Soft Blue Focus
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                // Neutral: Warm Sand/Beige (Safe, Non-distracting)
                neutral: {
                    50: '#fdfbf7', // Use for main background in light mode
                    100: '#f6f2e6',
                    200: '#e6ded0',
                    300: '#d5cbb8',
                    400: '#a89f91',
                    500: '#7d7463',
                    600: '#5c5446', // Main Text color
                    700: '#4a4136',
                    800: '#362f26',
                    900: '#241f19',
                },
                // Semantic Roles (using the palette)
                background: 'rgba(var(--background))',
                foreground: 'rgba(var(--foreground))',
                'muted-green': { // Backward compatibility / Specific use
                    500: '#5c9a7e',
                },
                'soft-blue': { // Backward compatibility / Specific use
                    500: '#0ea5e9',
                },
                'warm-neutral': { // Backward compatibility
                    100: '#f3f4f6', // Fallback
                    50: '#fdfbf7',
                }
            }
        },
    },
    plugins: [],
}
