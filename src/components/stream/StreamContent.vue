<template lang="html">
    <main :class="panelClasses" id="content">
        <StreamVideo :channel="channel" />
        <StreamChat :channel="channel" />
    </main>
</template>

<script>
import StreamVideo from '@/components/stream/StreamVideo.vue';
import StreamChat from '@/components/stream/StreamChat.vue';

export default {
    props: {
        channel: String,
    },
    computed: {
        panelClasses() {
            let panels = this.$store.state.panels;
            if (panels.stream && panels.chat === false) {
                return 'streamer__stream-chat stream';
            } else if (panels.chat && panels.stream === false) {
                return 'streamer__stream-chat chat';
            } else {
                return 'streamer__stream-chat';
            }
        }
    },
    components: {
        StreamVideo,
        StreamChat,
    },
};
</script>

<style lang="less">

</style>
