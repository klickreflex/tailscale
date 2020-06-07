<template>
    <div class="flex justify-between">
        <button
            class="w-8 h-8 mx-2 border-yellow-300 rounded"
            :class="{
                'border-2': baseColor === preset.baseColor,
            }"
            v-for="preset in presets"
            :style="{ backgroundColor: preset.baseColor }"
            @click="$parent.applyPreset(preset)"
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
