<template>
    <div id="app" :style="customProperties">
        <div class="max-w-xl mx-auto">
            <h1 class="font-serif text-6xl font-black text-blue-800">
                TailScale
            </h1>
            <p class="max-w-sm mt-0">
                Generate TailwindCSS-compatible color shades from a base color.
            </p>
        </div>

        <div class="mt-8 max-w-xl mx-auto flex justify-between">
            <button
                class="w-8 h-8 mx-2 rounded border-yellow-300"
                :class="{
                    'border-2': baseColor === preset.baseColor,
                }"
                v-for="preset in presets"
                :style="{ backgroundColor: preset.baseColor }"
                @click="applyPreset(preset)"
            />
        </div>

        <div class="max-w-xl mx-auto mt-4">
            <div class="p-4 -mx-4 border-4 border-current-300 rounded-lg">
                <div class="grid grid-cols-2 gap-4">
                    <label class="block">
                        <span class="text-sm uppercase">Color Name</span>
                        <input
                            class="block w-full mt-1 form-input"
                            placeholder="green"
                            v-model="colorName"
                        >
                    </label>

                    <label class="block">
                        <span class="text-sm uppercase">Color Value</span>
                        <color-picker v-model="baseColor" />
                    </label>
                </div>

                <div class="mt-4">
                    <span class="text-sm uppercase">Brightness Spread</span>
                    <slider
                        v-model="spread"
                        :min="-100"
                        :max="100"
                        :min-range="100"
                        :tooltip-formatter="value => `${value}%`"
                    />
                </div>
            </div>
        </div>

        <div class="mt-16">
            <h2 class="max-w-xl mx-auto font-serif text-4xl font-black text-blue-800">
                Here’s your Palette
            </h2>
            <p class="max-w-xl mx-auto mt-2">
                Click to copy, edit to change.
            </p>
            <div class="max-w-3xl mx-auto mt-6">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <color-card
                        v-for="(color, shade) in shades"
                        v-model="shades[shade]"
                        :color-name="colorName"
                        :shade-name="shade"
                        :key="shade"
                    />
                </div>
            </div>
        </div>

        <div class="mt-16">
            <h2 class="max-w-xl mx-auto font-serif text-4xl font-black text-blue-800">
                Here are your Color Objects
            </h2>
            <div class="max-w-xl mx-auto mt-2">
                <p>
                    Copy &amp; paste into <code class="text-gray-800">tailwind.config.js</code>.
                </p>
                <button
                    class="inline-flex items-center px-4 py-2 mt-4 text-xs tracking-wide uppercase transition duration-200 ease-in bg-yellow-300 rounded-sm hover:text-yellow-100 hover:bg-blue-800 focus:shadow-outline focus:outline-none"
                >
                    <svg class="w-4 h-4 mr-2 fill-current" viewBox="0 0 16 16"><title>note-code</title><g><path d="M10.4,15.8l-3.6-2.7l-5.5,1.8C1,15.1,0,15.1,0,14V2c0-0.6,0.4-1,1-1h2v2H2v9.6l4.7-1.6 c0.3-0.1,0.7,0,0.9,0.1l3.5,2.6l2.9-1.4V3h-1V1h2c0.6,0,1,0.4,1,1v11c0,0.4-0.2,0.7-0.6,0.9l-4,2C11.1,16,10.7,16,10.4,15.8z" /> <rect x="5" width="6" height="4" /></g></svg>
                    <span>Copy to clipboard</span>
                </button>
            </div>


            <div class="max-w-xl mx-auto mt-6">
                <pre class="px-16 py-6 text-yellow-200 bg-blue-900 rounded-lg">{{ tailwindConfig }}</pre>
            </div>
        </div>
    </div>
</template>

<script>
import Color from 'color';
import ColorCard from './components/color-card';
import ColorPicker from './components/color-picker';
import Slider from 'vue-slider-component';

export default {
    name: 'App',

    data: () => ({
        colorName: 'green',
        baseColor: '#48BB78',
        shades: {
            100: '#F0FFF4',
            200: '#C6F6D5',
            300: '#9AE6B4',
            400: '#68D391',
            500: '#48BB78',
            600: '#38A169',
            700: '#2F855A',
            800: '#276749',
            900: '#22543D',
        },
        spread: [ -90, 80 ],
        presets: [
            { colorName: 'red', baseColor: '#F56565' },
            { colorName: 'orange', baseColor: '#ED8936' },
            { colorName: 'yellow', baseColor: '#ECC94B' },
            { colorName: 'green', baseColor: '#48BB78' },
            { colorName: 'teal', baseColor: '#38B2AC' },
            { colorName: 'blue', baseColor: '#4299E1' },
            { colorName: 'indigo', baseColor: '#667EEA' },
            { colorName: 'purple', baseColor: '#9F7AEA' },
            { colorName: 'pink', baseColor: '#ED64A6' },
        ],
    }),

    watch: {
        baseColor: 'regenerateShades',
        spread: 'regenerateShades',
    },

    computed: {
        customProperties() {
            const properties = {};
            for (const shade of Object.keys(this.shades)) {
                properties[`--current-${shade}`] = this.shades[shade];
            }
            return properties;
        },
        tailwindConfig() {
            const config = [];
            config.push(`${this.colorName}: {`);

            for (const shade of Object.keys(this.shades)) {
                config.push(`    ${shade}: '${this.shades[shade]}',`);
            }

            config.push('}');
            return config.join('\n');
        },
    },


    methods: {
        regenerateShades() {
            const color = Color(this.baseColor);
            const white = Color('#ffffff');
            const black = Color('#000000');

            const blackMultiplier = (this.spread[0] / 100) / 4;
            const whiteMultiplier = (this.spread[1] / 100) / 4;
            const multipliers = {
                100: whiteMultiplier * 4,
                200: whiteMultiplier * 3,
                300: whiteMultiplier * 2,
                400: whiteMultiplier * 1,
                500: null,
                600: blackMultiplier * 1,
                700: blackMultiplier * 2,
                800: blackMultiplier * 3,
                900: blackMultiplier * 4,
            };

            const shades = { };
            for (const shade of Object.keys(multipliers)) {
                const multiplier = multipliers[shade];
                if (multiplier === null) {
                    shades[shade] = this.baseColor;
                } else if (multiplier > 0) {
                    shades[shade] = color.mix(white, multiplier).hex();
                } else {
                    shades[shade] = color.mix(black, Math.abs(multiplier)).hex();
                }
            }

            this.shades = shades;
        },
        applyPreset(preset) {
            if (preset.baseColor) {
                this.baseColor = preset.baseColor;
            }
            if (preset.colorName) {
                this.colorName = preset.colorName;
            }
        },
    },


    components: {
        ColorCard,
        ColorPicker,
        Slider,
    },
};
</script>

<style lang="scss">

/* Slider styles */
$themeColor: var(--current-500);
@import '~vue-slider-component/lib/theme/default.scss';
</style>
