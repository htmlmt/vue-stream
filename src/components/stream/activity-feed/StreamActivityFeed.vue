<template lang="html">
    <aside
        class="
            flex
            items-stretch
            justify-between
            pr-4
            relative
            z-0
        "
    >
        <div
            class="
                activity-feed__feed

                overflow-x-scroll
                py-4
            "
        >
            <StreamActivityFeedList
                :itemsShown="items.length == 1 ? 1 : 3"
                :totalItems="items.length"
            >
                <StreamActivityFeedListItem
                    :item="item"
                    :key="item.createdDateUTC"
                    :totalItems="items.length"
                    v-for="item in items"
                >
                    <div
                        class="
                            item__badge

                            border
                            border-b-0
                            border-gray-400
                            border-solid
                            flex
                            items-center
                            justify-center
                            rounded-t-lg

                            lg:border-b
                            lg:border-r-0
                            lg:rounded-l-lg
                            lg:rounded-tr-none
                        "
                    >
                        <img
                            :alt="item.title"
                            :src="item.imageURL"
                            v-if="item.type === 'participantBadge'"
                        />
                        <p
                            class="
                                font-display
                                text-green-400
                                m-0
                            "
                            v-if="item.type === 'donation'"
                        >
                            <strong>{{ item.amount | formatMoney }}</strong>
                        </p>
                    </div>
                    <div
                        class="
                            item__description

                            border
                            border-gray-400
                            border-t-0
                            flex
                            items-start
                            relative
                            rounded-b-lg

                            lg:border-t
                            lg:flex-wrap
                            lg:items-center
                            lg:rounded-bl-none
                            lg:rounded-r-lg
                        "
                    >
                        <StreamActivityItemText
                            class="description__title"
                            v-if="item.title"
                        >
                            {{ item.title }}
                        </StreamActivityItemText>
                        <StreamActivityItemText
                            class="description__message"
                            v-if="item.message"
                        >
                            {{ item.message }}
                        </StreamActivityItemText>
                        <p
                            class="
                                description__time

                                m-0
                                text-center
                                text-gray-600
                                w-full

                                lg:absolute
                                lg:text-right
                                lg:w-auto
                            "
                            v-if="item.createdDateUTC"
                        >
                            {{ item.createdDateUTC | formatDate }}
                        </p>
                        <p
                            class="
                                description__time

                                m-0
                                text-center
                                text-gray-600
                                w-full

                                lg:absolute
                                lg:text-right
                                lg:w-auto
                            "
                            v-if="item.noActivity"
                        >
                            {{ item.noActivity }}
                        </p>
                    </div>
                </StreamActivityFeedListItem>
            </StreamActivityFeedList>
        </div>
        <div class="
            activity-feed__button

            flex
            items-center
            py-4
        ">
            <LinkCTA>
                <Icon
                    icon-color="white"
                    icon-name="donate"
                >
                    <g v-html="getIconByName('donate')"></g>
                </Icon>
            </LinkCTA>
        </div>
    </aside>
</template>

<script>
import FetchIcons from '@/data/fetch-icons';

import LinkCTA from '@/components/atoms/LinkCTA.vue';
import Icon from '@/components/atoms/Icon.vue';

import StreamActivityFeedList from '@/components/stream/activity-feed/StreamActivityFeedList.vue';
import StreamActivityFeedListItem from '@/components/stream/activity-feed/StreamActivityFeedListItem.vue';
import StreamActivityItemText from '@/components/stream/activity-feed/StreamActivityItemText.vue';

import moment from 'moment';
import numeral from 'numeral';

import { mapState } from 'vuex';

export default {
    extends: FetchIcons,
    computed: {
        ...mapState({
            items: 'currentParticipantActivity'
        })
    },
    filters: {
        formatDate(date) {
            return moment(date).fromNow();
        },
        formatMoney(amount) {
            return numeral(amount).format('($0a)');
        }
    },
    components: {
        LinkCTA,
        Icon,
        StreamActivityFeedList,
        StreamActivityFeedListItem,
        StreamActivityItemText,
    },
};
</script>

<style lang="less">
@import '../../../assets/styles/main/variables/elements';
@import '../../../assets/styles/main/variables/colors';
@import '../../../assets/styles/main/variables/screen-sizes';

@import '../../../assets/styles/main/mixins/media-queries';

@import '../../../assets/styles/main/components/stream/stream-activity-feed';

.activity-feed__feed {
    -ms-overflow-style: none;
    width: calc(100% - 76px);

    &::-webkit-scrollbar {
        display: none;
    }

    .screen-lg ({
        width: calc(100% - 166px);
    });
}

.item__badge {
    height: 70%;

    .screen-lg ({
        height: auto;
        width: 60px;
    });
}

.item__description {
    height: 30%;

    .screen-lg ({
        height: auto;
        padding: 10px 100px 10px 14px;
        width: calc(100% - 60px);
    });
}

.description__title,
.description__message {
    .screen-lg ({
        text-overflow: ellipsis;
    });
}
</style>
