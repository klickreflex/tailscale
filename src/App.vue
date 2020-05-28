<template>
    <div id="app">
        <div class="max-w-xl mx-auto">
            <h1 class="font-serif font-black text-blue-800 text-6xl">
                TailScale
            </h1>
            <p class="max-w-sm mt-0">
                Generate TailwindCSS-compatible color shades from a base color.
            </p>
        </div>

        <div class="mt-8 mx-auto max-w-xl mx-auto">
            <div class="rounded-lg border-4 border-yellow-300 p-4 -mx-4">
                <div class="grid grid-cols-2 gap-4">
                    <label class="block">
                        <span class="text-sm uppercase">Color Name</span>
                        <input class="form-input mt-1 block w-full" placeholder="green">
                    </label>

                    <label class="block">
                        <span class="text-sm uppercase">Color Value</span>
                        <input class="form-input mt-1 block w-full" type="text" placeholder="#48bb78">
                    </label>
                </div>
            </div>
        </div>

        <div class="mt-16">
            <h2 class="max-w-xl mx-auto font-serif font-black text-4xl text-blue-800">
                Here’s your palette
            </h2>
            <p class="max-w-xl mx-auto mt-2">
                Click to copy, edit to change.
            </p>
            <div class="mt-6 max-w-3xl mx-auto">
                <div class="grid gap-4 grid-cols-1 md:grid-cols-3">
                    <div class="bg-green-100 shadow-lg rounded-lg p-4 md:p-6">
                        <div>
                            <p class="text-sm text-center">
                                <span class="inline-block bg-white bg-opacity-50 py-1 px-2 rounded-sm">
                                    green-100
                                </span>
                            </p>
                            <input type="text" class="mt-2 text-sm form-input inline-block max-w-full" value="#c6f6d5">
                        </div>
                    </div>
                    <div class="bg-green-200 shadow-lg rounded-lg p-4 md:p-6">
                        <div>
                            <p class="text-sm text-center">
                                <span class="inline-block bg-white bg-opacity-50 py-1 px-2 rounded-sm">
                                    green-200
                                </span>
                            </p>
                            <input type="text" class="mt-2 text-sm form-input inline-block max-w-full" value="#c6f6d5">
                        </div>
                    </div>
                    <div class="bg-green-300 shadow-lg rounded-lg p-4 md:p-6">
                        <div>
                            <p class="text-sm text-center">
                                <span class="inline-block bg-white bg-opacity-50 py-1 px-2 rounded-sm">
                                    green-300
                                </span>
                            </p>
                            <input type="text" class="mt-2 text-sm form-input inline-block max-w-full" value="#c6f6d5">
                        </div>
                    </div>
                    <div class="bg-green-400 shadow-lg rounded-lg p-4 md:p-6">
                        <div>
                            <p class="text-sm text-center">
                                <span class="inline-block bg-white bg-opacity-50 py-1 px-2 rounded-sm">
                                    green-400
                                </span>
                            </p>
                            <input type="text" class="mt-2 text-sm form-input inline-block max-w-full" value="#c6f6d5">
                        </div>
                    </div>
                    <div class="bg-green-500 shadow-lg rounded-lg p-4 md:p-6">
                        <div>
                            <p class="text-sm text-center">
                                <span class="inline-block bg-white bg-opacity-50 py-1 px-2 rounded-sm">
                                    green-500
                                </span>
                            </p>
                            <input type="text" class="mt-2 text-sm form-input inline-block max-w-full" value="#c6f6d5">
                        </div>
                    </div>
                    <div class="bg-green-600 shadow-lg rounded-lg p-4 md:p-6">
                        <div>
                            <p class="text-sm text-center">
                                <span class="inline-block bg-white bg-opacity-50 py-1 px-2 rounded-sm">
                                    green-600
                                </span>
                            </p>
                            <input type="text" class="mt-2 text-sm form-input inline-block max-w-full" value="#c6f6d5">
                        </div>
                    </div>
                    <div class="bg-green-700 shadow-lg rounded-lg p-4 md:p-6">
                        <div>
                            <p class="text-sm text-center">
                                <span class="inline-block bg-white bg-opacity-50 py-1 px-2 rounded-sm">
                                    green-700
                                </span>
                            </p>
                            <input type="text" class="mt-2 text-sm form-input inline-block max-w-full" value="#c6f6d5">
                        </div>
                    </div>
                    <div class="bg-green-800 shadow-lg rounded-lg p-4 md:p-6">
                        <div>
                            <p class="text-sm text-center">
                                <span class="inline-block bg-white bg-opacity-50 py-1 px-2 rounded-sm">
                                    green-800
                                </span>
                            </p>
                            <input type="text" class="mt-2 text-sm form-input inline-block max-w-full" value="#c6f6d5">
                        </div>
                    </div>
                    <div class="bg-green-900 shadow-lg rounded-lg p-4 md:p-6">
                        <div>
                            <p class="text-sm text-center">
                                <span class="inline-block bg-white bg-opacity-50 py-1 px-2 rounded-sm">
                                    green-900
                                </span>
                            </p>
                            <input type="text" class="mt-2 text-sm form-input inline-block max-w-full" value="#c6f6d5">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-16">
            <h2 class="max-w-xl mx-auto font-serif font-black text-4xl text-blue-800">
                Here are your Color Objects
            </h2>
            <div class="max-w-xl mx-auto mt-2">
                <p>
                    Copy &amp; paste into <code class="text-gray-800">tailwind.config.js</code>.
                </p>
                <button
                    class="mt-4 inline-flex items-center duration-200 ease-in transition rounded-sm px-4 py-2 hover:text-yellow-100 bg-yellow-300 text-xs uppercase tracking-wide hover:bg-blue-800 focus:shadow-outline focus:outline-none"
                >
                    <svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 16 16"><title>note-code</title><g><path d="M10.4,15.8l-3.6-2.7l-5.5,1.8C1,15.1,0,15.1,0,14V2c0-0.6,0.4-1,1-1h2v2H2v9.6l4.7-1.6 c0.3-0.1,0.7,0,0.9,0.1l3.5,2.6l2.9-1.4V3h-1V1h2c0.6,0,1,0.4,1,1v11c0,0.4-0.2,0.7-0.6,0.9l-4,2C11.1,16,10.7,16,10.4,15.8z" /> <rect x="5" width="6" height="4" /></g></svg>
                    <span>Copy to clipboard</span>
                </button>
            </div>


            <div class="mt-6 max-w-xl mx-auto">
                <pre class="bg-blue-900 text-yellow-200 rounded-lg px-16 py-6">
green: {
    100: '#f0fff4',
    200: '#c6f6d5',
    300: '#9ae6b4',
    400: '#68d391',
    500: '#48bb78',
    600: '#38a169',
    700: '#2f855a',
    800: '#276749',
    900: '#22543d',
},</pre>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>
