<template lang="html">
    <aside class="streamer__activity-feed">
        <div class="activity-feed__feed">
            <ul class="feed__list" :style="{ width: ((items.length / 3) * 100) + '%' }">
                <li :style="{ width: (100 / items.length) + '%' }" v-for="item in items" :key="item.createdDateUTC">
                    <div class="item__badge">
                        <img :src="item.imageURL" :alt="item.title">
                    </div>
                    <div class="item__description">
                        <p class="description__title">
                            <strong>{{ item.title }}</strong>
                        </p>
                        <p class="description__message">
                            {{ item.message }}
                        </p>
                        <p class="description__time">
                            {{ item.createdDateUTC | formatDate }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="activity-feed__button">
            <Button>
                <Icon
                icon-name="donate"
                >
                    <g v-html="getIconByName('donate')"></g>
                </Icon>
            </Button>
        </div>
    </aside>
</template>

<script>
import FetchIcons from '@/data/fetch-icons';

import Icon from '@/components/atoms/Icon.vue';

import Button from '@/components/atoms/Button.vue';

import moment from 'moment';

export default {
    extends: FetchIcons,
    data() {
        return {
            participantID: -1,
        };
    },
    computed: {
        items() {
            let data = this;

            let result = this.$store.state.data.participants.find(function(object) {
                return object.participantID === data.participantID;
            });

            if (!result) {
                return [];
            } else {
                return result.activity;
            }
        },
    },
    mounted() {
        let searchParams = new URLSearchParams(window.location.search.substring(1));

        let participantID = searchParams.get('participantID');

        this.participantID = parseInt(participantID);

        if (participantID) {
            this.$store.commit('fetchParticipantActivity', {
                participantID: participantID
            });
        }
    },
    filters: {
        formatDate(date) {
            return moment(date).fromNow();
        }
    },
    components: {
        Button,
        Icon,
    },
};
</script>

<style lang="less">
@import '../../assets/styles/main/variables/elements';
@import '../../assets/styles/main/variables/colors';
@import '../../assets/styles/main/variables/screen-sizes';

@import '../../assets/styles/main/mixins/media-queries';

@import '../../assets/styles/main/components/stream/stream-activity-feed';
</style>
