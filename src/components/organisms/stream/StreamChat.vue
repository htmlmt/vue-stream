<template lang="html">
    <div class="stream-chat__chat">
        <iframe
            :id="channel"
            :src="chatUrl"
            frameborder="0"
            height="100%"
            scrolling="yes"
            width="100%"
        >
        </iframe>
    </div>
</template>

<script>
export default {
    name: "StreamChat",
    props: {
        channel: String,
    },
    computed: {
        chatUrl() {
            return `https://www.twitch.tv/embed/${this.channel}/chat`;
        },
    },
};
</script>

<style lang="less">
@import "../../../assets/styles/main/variables/screen-sizes";

@import "../../../assets/styles/main/mixins/media-queries";

@import "../../../assets/styles/main/components/organisms/stream/stream-chat";
</style>
