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

        <preset-list
            :presets="presets"
            :base-color="baseColor"
            @apply="applyPreset"
            class="max-w-xl mx-auto mt-8 "
        />

        <div class="max-w-xl mx-auto mt-4">
            <div class="p-4 -mx-4 border-4 rounded-lg border-current-300">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block">
                            <span class="text-sm uppercase">Color Name</span>
                            <input
                                class="block w-full mt-1 form-input"
                                placeholder="green"
                                v-model="colorName"
                            >
                        </label>

                        <color-name-suggestion
                            v-model="colorName"
                            :base-color="baseColor"
                            :presets="presets"
                            class="mt-4"
                        />
                    </div>


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
                <copy-to-clipboard-button :content-to-copy="tailwindConfig">
                    Copy to clipboard
                </copy-to-clipboard-button>
            </div>


            <div class="max-w-xl mx-auto mt-6">
                <pre class="px-16 py-6 text-yellow-200 bg-blue-900 rounded-lg">{{ tailwindConfig }}</pre>
            </div>
        </div>
    </div>
</template>

<script>
import ColorCard from './components/color-card';
import ColorPicker from './components/color-picker';
import CopyToClipboardButton from './components/copy-to-clipboard-button';
import ColorNameSuggestion from './components/color-name-suggestion';
import Slider from 'vue-slider-component';
import PresetList from './components/preset-list';
import { generateColorShades, generateTailwindConfig } from './generation';

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
            return generateTailwindConfig(this.colorName, this.shades);
        },
    },


    methods: {
        regenerateShades() {
            this.shades = generateColorShades(this.baseColor, this.spread);
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
        CopyToClipboardButton,
        PresetList,
        ColorNameSuggestion,
    },
};
</script>

<style lang="scss">

/* Slider styles */
$themeColor: var(--current-500);
@import '~vue-slider-component/lib/theme/default.scss';
</style>
