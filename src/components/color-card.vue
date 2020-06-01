<template>
    <div
        class="flex justify-center p-4 rounded-lg shadow-lg md:p-6"
        :style="`background-color: ${colorValue}`"
    >
        <div>
            <p class="text-sm text-center">
                <span class="inline-block px-2 py-1 bg-white bg-opacity-50 rounded-sm">
                    {{ `${colorName}-${colorShade}` }}
                </span>
            </p>
            <input
                type="text"
                class="inline-block max-w-full mt-2 text-sm form-input"
                :value="colorValue"
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        colorName: {
            type: String,
            required: true,
        },
        colorShade: {
            type: Number,
            required: true,
        },
        colorValue: {
            type: String,
            required: true,
        },
    },
};
</script>
