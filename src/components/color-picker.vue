<template>
    <div class="color-picker">
        <chrome-picker
            :value="value"
            @input="color => this.$emit('input', color.hex)"
            disable-alpha
        />
    </div>
</template>

<script>
import { Chrome as ChromePicker } from 'vue-color';

export default {
    name: 'ColorPicker',

    components: { ChromePicker },

    props: {
        value: { type: String, required: true },
    },
};
</script>

<style lang="scss" scoped>
    .color-picker ::v-deep {
        // Do not use Menlo in color picker
        .vc-chrome {
            font-family: inherit;
        }

        // Conflicting color picker styles and global styles
        svg {
            display: initial;
        }

        // Misplaced button
        .vc-chrome-toggle-icon {
            margin-top: 0;
        }

        .vc-chrome-toggle-icon-highlight {
            top: -2px;
        }
    }
</style>
