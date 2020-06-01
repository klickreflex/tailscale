<template>
    <div
        class="flex justify-center p-4 rounded-lg shadow-lg md:p-6"
        :style="`background-color: ${value.value}`"
    >
        <div>
            <p class="text-sm text-center">
                <span class="inline-block px-2 py-1 bg-white bg-opacity-50 rounded-sm">
                    {{ `${value.name}-${value.shade}` }}
                </span>
            </p>
            <input
                type="text"
                class="inline-block max-w-full mt-2 text-sm form-input"
                v-model="value.value"
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            required: true,
        },
    },

    watch: {
        value() {
            this.$emit('input', this.value);
        },
    },
};
</script>
