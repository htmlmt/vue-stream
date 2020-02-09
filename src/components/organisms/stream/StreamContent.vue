<template lang="html">
    <main :class="panelClasses" id="content">
        <StreamVideo :channel="channel" />
        <StreamChat :channel="channel" />
    </main>
</template>

<script>
import StreamChat from "@/components/organisms/stream/StreamChat.vue";
import StreamVideo from "@/components/organisms/stream/StreamVideo.vue";

export default {
    name: "StreamContent",
    components: {
        StreamChat,
        StreamVideo,
    },
    props: {
        channel: String,
    },
    computed: {
        panelClasses() {
            let panels = this.$store.state.panels;
            if (panels.stream && panels.chat === false) {
                return "streamer__stream-chat stream bg-gray-400 border-b border-t border-gray-400 flex flex-1 flex-wrap items-stretch w-full";
            } else if (panels.chat && panels.stream === false) {
                return "streamer__stream-chat chat bg-gray-400 border-b border-t border-gray-400 flex flex-1 flex-wrap items-stretch w-full";
            } else {
                return "streamer__stream-chat bg-gray-400 border-b border-t border-gray-400 flex flex-1 flex-wrap items-stretch w-full";
            }
        }
    },
};
</script>
