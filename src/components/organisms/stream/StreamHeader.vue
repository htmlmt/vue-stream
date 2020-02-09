<template lang="html">
    <header>
        <div class="header__title">
            <h1 class="font-bold">{{ title }}</h1>
        </div>
        <StreamNavigation
        filter="AND({Instance} = 'demo', {Type} = 'General')"
        />
    </header>
</template>

<script>
import StreamNavigation from "@/components/organisms/stream/StreamNavigation.vue";

export default {
    name: "StreamHeader",
    components: {
        StreamNavigation,
    },
    props: {
        title: {
            type: String,
            default: "Stream",
        },
    },
};
</script>

<style lang="less">
@import "../../../assets/styles/main/variables/screen-sizes";
@import "../../../assets/styles/main/variables/elements";

@import "../../../assets/styles/main/mixins/media-queries";

@import "../../../assets/styles/main/components/organisms/stream/stream-header";
</style>
