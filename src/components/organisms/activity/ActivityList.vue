<template lang="html">
    <ul
        :style="
            {
                width: ((totalItems / itemsShown) * 100) + '%'
            }
        "
        class="
            flex
            items-stretch
            list-none
            relative
        "
    >
        <slot />
    </ul>
</template>

<script>
export default {
    name: "ActivityList",
    props: {
        totalItems: {
            type: Number,
            default: 1,
        },
        itemsShown: {
            type: Number,
            default: 1,
        },
    },
};
</script>
