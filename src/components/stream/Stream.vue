<template lang="html">
    <article
        class="
            border
            border-gray-400
            flex
            flex-1
            flex-col
            min-h-full
            overflow-hidden
            rounded-lg
        "
    >
        <StreamHeader title="Stream" />
        <StreamContent
            :channel="currentParticipantStreamLink"
            v-if="currentParticipantStreamLink"
        />
        <StreamEmpty
            v-if="currentParticipantStreamLink == ''"
        />
        <StreamActivityFeed filter="AND({Instance} = 'demo', {Type} = 'Badge')" />
    </article>
</template>

<script>
import StreamHeader from '@/components/stream/StreamHeader.vue';
import StreamContent from '@/components/stream/StreamContent.vue';
import StreamActivityFeed from '@/components/stream/activity-feed/StreamActivityFeed.vue';
import StreamEmpty from '@/components/stream/StreamEmpty.vue';

import { mapGetters } from 'vuex';

export default {
    components: {
        StreamHeader,
        StreamContent,
        StreamActivityFeed,
        StreamEmpty,
    },
    computed: {
        ...mapGetters([
            'currentParticipantStreamLink',
            'isLoading',
        ]),
    },
};
</script>
