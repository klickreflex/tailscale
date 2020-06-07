<template>
    <div v-if="suggestedColorName !== value">
        Suggestion:
        <button
            class="p-2 bg-current-500 rounded"
            :class="{ 'text-white': isDark }"
            @click="$emit('input', suggestedColorName)"
        >
            {{ suggestedColorName }}
        </button>
    </div>
</template>

<script>
import Color from 'color';

export default {
    props: {
        presets: { type: Array, required: true },
        baseColor: { type: String, required: true },
        value: { type: String, required: true },
    },

    computed: {
        suggestedColorName() {
            const colorHsl = Color(this.baseColor).hsl().object();

            const diffToColor = subject => {
                const subHsl = Color(subject).hsl().object();
                return Math.abs(colorHsl.h - subHsl.h);
            };

            const presets = [...this.presets];

            return presets.sort((a, b) => {
                return diffToColor(a.baseColor) - diffToColor(b.baseColor);
            })[0].colorName;
        },
        isDark() {
            return Color(this.baseColor).isDark();
        },
    },
};
</script>
