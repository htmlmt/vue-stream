<template lang="html">
    <article class="body__streamer">
        <StreamHeader title="Stream" />
        <StreamContent channel="drlupo" />
        <StreamActivityFeed filter="AND({Instance} = 'demo', {Type} = 'Badge')" />
    </article>
</template>

<script>
import StreamHeader from '@/components/stream/StreamHeader.vue';
import StreamContent from '@/components/stream/StreamContent.vue';
import StreamActivityFeed from '@/components/stream/StreamActivityFeed.vue';

export default {
    components: {
        StreamHeader,
        StreamContent,
        StreamActivityFeed,
    },
};
</script>

<style lang="less">
@import '../../assets/styles/main/variables/colors';

@import '../../assets/styles/main/components/stream/stream';
</style>
