<template>
    <div class="flex justify-between">
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
</template>
<script>
export default {
    props: {
        presets: { type: Array, required: true },
        baseColor: { type: String, required: true },
    },
};
</script>
