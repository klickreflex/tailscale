module.exports = {
    purge: [],
    theme: {
        extend: {
            fontFamily: {
                serif: [ 'Playfair Display', 'serif'],
            },
            colors: {
                current: {
                    100: 'var(--current-100)',
                    200: 'var(--current-200)',
                    300: 'var(--current-300)',
                    400: 'var(--current-400)',
                    500: 'var(--current-500)',
                    600: 'var(--current-600)',
                    700: 'var(--current-700)',
                    800: 'var(--current-800)',
                    900: 'var(--current-900)',
                }
            }
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms'),
    ],
};
