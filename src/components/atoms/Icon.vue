<template lang="html">
    <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 30 30"
    :aria-labelledby="iconName | lowercaseNoSpaces"
    role="presentation"
    >
    <title
    :id="iconName | lowercaseNoSpaces"
    lang="en"
    >{{ iconName }} icon</title>
        <g class="icon-fill" :style="{ fill: iconColor }">
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
            default: 'var(--gray-400)',
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
