<template lang="html">
    <div @update-tabs="updateTabs" class="stream-chat__chat">
        <iframe
        frameborder="0"
        scrolling="yes"
        :id="channel"
        :src="chatUrl"
        height="100%"
        width="100%"
        >
        </iframe>
    </div>
</template>

<script>
export default {
    name: 'StreamChat',
    props: {
        channel: String,
    },
    methods: {
        updateTabs(e) {
            console.log(e);
        }
    },
    computed: {
        chatUrl() {
            return `https://www.twitch.tv/embed/${this.channel}/chat`;
        },
    },
};
</script>

<style lang="less">
@import '../../assets/styles/main/variables/screen-sizes';

@import '../../assets/styles/main/mixins/media-queries';

@import '../../assets/styles/main/components/stream/stream-chat';
</style>
