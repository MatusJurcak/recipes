import type { Config } from 'tailwindcss';

const config = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                h1: ['2.75rem', { lineHeight: '3.125rem', fontWeight: '700' }],
                h2: ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
                h3: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
                h4: ['1.5rem', { lineHeight: '1.875rem', fontWeight: '700' }],
                h5: ['1.125rem', { lineHeight: '1.5rem', fontWeight: '700' }],
            },
            colors: {
                background: '#fffff5',
                navbar: '#f5e7c1',
                'gray-background': 'rgb(232, 232, 232)',
            },
        },
    },
} satisfies Config;

export default config;
