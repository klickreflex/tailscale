<template>
    <div id="app">
        <div class="max-w-xl mx-auto">
            <h1 class="font-serif text-6xl font-black text-blue-800">
                TailScale
            </h1>
            <p class="max-w-sm mt-0">
                Generate TailwindCSS-compatible color shades from a base color.
            </p>
        </div>

        <div class="max-w-xl mx-auto mt-8">
            <div class="p-4 -mx-4 border-4 border-yellow-300 rounded-lg">
                <div class="grid grid-cols-2 gap-4">
                    <label class="block">
                        <span class="text-sm uppercase">Color Name</span>
                        <input
                            class="block w-full mt-1 form-input"
                            placeholder="green"
                            v-model="baseColor"
                        >
                    </label>

                    <label class="block">
                        <span class="text-sm uppercase">Color Value</span>
                        <color-picker v-model="baseColor" />
                    </label>
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

export default {
    name: 'App',

    data: () => ({
        colorName: 'green',
        baseColor: '#48bb78',
        shades: {
            100: '#f0fff4',
            200: '#c6f6d5',
            300: '#9ae6b4',
            400: '#68d391',
            500: '#48bb78',
            600: '#38a169',
            700: '#2f855a',
            800: '#276749',
            900: '#22543d',
        },
    }),

    watch: {
        baseColor(base) {
            this.shades = this.generateColorScale(base);
        },
    },

    computed: {
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
        generateColorScale(base) {
            const color = Color(base);
            const white = Color('#ffffff');
            const black = Color('#000000');

            return {
                100: color.mix(white,0.9).hex(),
                200: color.mix(white,0.7).hex(),
                300: color.mix(white,0.5).hex(),
                400: color.mix(white,0.3).hex(),
                500: base,
                600: color.mix(black,0.3).hex(),
                700: color.mix(black,0.5).hex(),
                800: color.mix(black,0.7).hex(),
                900: color.mix(black,0.8).hex(),
            };
        },
    },


    components: {
        ColorCard,
        ColorPicker,
    },
};
</script>
