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
        <StreamHeader :title="title" />
        <StreamContent
            :channel="currentParticipantStreamLink"
            v-if="currentParticipantStreamLink"
        />
        <StreamEmpty
            v-if="currentParticipantStreamLink == ''"
        />
        <TheActivity filter="AND({Instance} = 'demo', {Type} = 'Badge')" />
    </article>
</template>

<script>
import StreamContent from '@/components/organisms/stream/StreamContent.vue';
import StreamEmpty from '@/components/organisms/stream/StreamEmpty.vue';
import StreamHeader from '@/components/organisms/stream/StreamHeader.vue';
import TheActivity from '@/components/organisms/activity/TheActivity.vue';

import { mapGetters } from "vuex";

export default {
    name: "TheStream",
    components: {
        StreamContent,
        StreamEmpty,
        StreamHeader,
        TheActivity,
    },
    computed: {
        ...mapGetters([
            "currentParticipantStreamLink",
        ]),
        title() {
            if (this.currentParticipantStreamLink) {
                return this.currentParticipantStreamLink;
            } else {
                return "Stream";
            }
        }
    },
};
</script>
