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

import { mapState } from 'vuex';

export default {
    components: {
        StreamHeader,
        StreamContent,
        StreamActivityFeed,
        StreamEmpty,
    },
    methods: {
        fetchParticipantData() {
            const searchParams = new URLSearchParams(window.location.search.substring(1));

            const participantID = parseInt(searchParams.get('participantID'));

            this.$store.commit('setCurrentParticipantID', {
                currentParticipantID: participantID
            });

            this.$store.commit('fetchParticipant', {
                participantID: participantID
            });

            this.$store.commit('fetchParticipantActivity', {
                participantID: participantID
            });
        }
    },
    created() {
        this.fetchParticipantData();
    },
    computed: {
        ...mapState({
            currentParticipantStreamLink: 'currentParticipantStreamLink'
        })
    },
};
</script>
