<template lang="html">
    <div class="stream-chat__stream">
        <iframe
            :src="streamUrl"
            allowfullscreen="true"
            frameborder="0"
            height="100%"
            scrolling="no"
            width="100%"
        >
        </iframe>
    </div>
</template>

<script>
export default {
    name: "StreamVideo",
    props: {
        channel: String,
    },
    computed: {
        streamUrl() {
            return `https://player.twitch.tv/?channel=${this.channel}&muted=true`;
        },
    },
};
</script>

<style lang="less">
@import '../../../assets/styles/main/variables/screen-sizes';

@import '../../../assets/styles/main/mixins/media-queries';

@import '../../../assets/styles/main/components/organisms/stream/stream-video';
</style>
