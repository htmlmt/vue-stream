<template lang="html">
    <a class="skip-link" href="#content">
        {{ content }}
    </a>
</template>

<script>
export default {
    name: "SkipLink",
    props: {
        content: String,
    },
};
</script>

<style lang="less">
@import "../../assets/styles/main/components/atoms/skip-link";
</style>
