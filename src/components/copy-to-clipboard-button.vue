<template>
    <button
        @click="copyToClipboard"
        class="inline-flex items-center px-4 py-2 mt-4 text-xs tracking-wide uppercase transition duration-200 ease-in bg-yellow-300 rounded-sm hover:text-yellow-100 hover:bg-blue-800 focus:shadow-outline focus:outline-none"
        :class="{'is-active' : hasCopied }"
    >
        <svg v-if="hasCopied" class="w-4 h-4 mr-2 fill-current" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class="" /></svg>
        <svg v-else class="w-4 h-4 mr-2 fill-current" viewBox="0 0 16 16"><title>note-code</title><g><path d="M10.4,15.8l-3.6-2.7l-5.5,1.8C1,15.1,0,15.1,0,14V2c0-0.6,0.4-1,1-1h2v2H2v9.6l4.7-1.6 c0.3-0.1,0.7,0,0.9,0.1l3.5,2.6l2.9-1.4V3h-1V1h2c0.6,0,1,0.4,1,1v11c0,0.4-0.2,0.7-0.6,0.9l-4,2C11.1,16,10.7,16,10.4,15.8z" /> <rect x="5" width="6" height="4" /></g></svg>
        <span><slot /></span>
    </button>
</template>

<script>
export default {
    props: {
        contentToCopy: { type: String, required: true },
    },

    data: () => ({
        hasCopied: false,
    }),

    methods: {
        copyToClipboard() {
            navigator.clipboard.writeText(this.contentToCopy).then(() => {
                this.hasCopied = true;
                setTimeout(() => this.hasCopied = false, 3000);
            }, function() {
                console.error('Writing to clipboard failed');
            });
        },
    },
};
</script>

<style scoped>
button.is-active {
    @apply bg-blue-200 text-blue-800;
}
</style>
