<template lang="html">
    <div class="stream-chat__stream">
        <iframe
            :src="streamUrl"
            height="100%"
            width="100%"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true">
        </iframe>
    </div>
</template>

<script>
export default {
    name: 'StreamVideo',
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
@import '../../assets/styles/main/variables/screen-sizes';

@import '../../assets/styles/main/mixins/media-queries';

@import '../../assets/styles/main/components/stream/stream-video';
</style>
