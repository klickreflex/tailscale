module.exports = {
    purge: [],
    theme: {
        extend: {
            fontFamily: {
                serif: [ 'Playfair Display', 'serif'],
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms'),
    ],
};
