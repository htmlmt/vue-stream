<template lang="html">
    <svg
        :aria-labelledby="iconName | lowercaseNoSpaces"
        :height="height"
        :width="width"
        role="presentation"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
    >
    <title
        :id="iconName | lowercaseNoSpaces"
        lang="en"
    >{{ iconName }} icon</title>
        <g
            :style="{ fill: iconColor }"
            class="icon-fill"
        >
            <slot />
        </g>
    </svg>
</template>

<script>
export default {
    props: {
        iconName: {
            type: String,
            default: 'icon',
        },
        width: {
            type: [Number, String],
            default: 30,
        },
        height: {
            type: [Number, String],
            default: 30,
        },
        iconColor: {
            type: String,
            default: 'black',
        },
    },
    filters: {
        lowercaseNoSpaces(value) {
            if (!value) {
                return '';
            }

            return value.toLowerCase()
            .replace(/[-_]+/g, ' ')
            .replace(/[^\w\s]/g, '')
            .replace(/ /g, '');
        },
    },
};
</script>
