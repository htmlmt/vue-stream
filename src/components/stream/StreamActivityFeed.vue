<template lang="html">
    <aside class="
        flex
        items-stretch
        justify-between
        pr-4
        relative
        z-0
    ">
        <div class="
            activity-feed__feed

            overflow-x-scroll
            py-4
        ">
            <ul
                class="
                    feed__list

                    flex
                    items-stretch
                    list-none
                    relative
                "
                :style="
                    {
                        width: ((items.length / 3) * 100) + '%'
                    }
                "
                v-cloak
            >
                <li
                    class="
                        pl-4
                        relative
                        w-1/3
                        z-100

                        lg:flex
                        lg:items-stretch
                        lg:static
                    "
                    :key="item.createdDateUTC"
                    :style="
                        {
                            width: (100 / items.length) + '%'
                        }
                    "
                    v-for="item in items"
                >
                    <div class="
                        item__badge

                        bg-white
                        border
                        border-b-0
                        border-gray-400
                        border-solid
                        flex
                        items-center
                        justify-center
                        rounded-t-sm

                        lg:border-b
                        lg:border-r-0
                        lg:rounded-bl-sm
                        lg:rounded-tr-none
                    ">
                        <img
                            :alt="item.title"
                            :src="item.imageURL"
                            v-if="item.type === 'participantBadge'"
                        />
                        <p
                            class="
                                font-sans
                                text-green-400
                                m-0
                            "
                            v-if="item.type === 'donation'"
                        >
                            <strong>{{ item.amount | formatMoney }}</strong>
                        </p>
                    </div>
                    <div class="
                        item__description

                        bg-white
                        border
                        border-gray-400
                        border-t-0
                        flex
                        items-start
                        relative
                        rounded-b-sm

                        lg:border-t
                        lg:flex-wrap
                        lg:items-center
                        lg:rounded-bl-none
                        lg:rounded-r-sm
                    ">
                        <p class="
                            description__title

                            hidden

                            lg:block
                            lg:gray-700
                            lg:m-0
                            lg:overflow-hidden
                            lg:whitespace-no-wrap
                            lg:w-full
                        ">
                            <strong>{{ item.title }}</strong>
                        </p>
                        <p class="
                            description__message

                            hidden

                            lg:block
                            lg:text-gray-700
                            lg:m-0
                            lg:overflow-hidden
                            lg:whitespace-no-wrap
                            lg:w-full
                        " v-if="item.message">
                            {{ item.message }}
                        </p>
                        <p class="
                            description__time

                            m-0
                            text-center
                            text-gray-600
                            w-full

                            lg:absolute
                            lg:text-right
                            lg:w-auto
                        ">
                            {{ item.createdDateUTC | formatDate }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="
            activity-feed__button

            flex
            items-center
            py-4
        ">
            <!-- <Button class="
                flex
                items-center
                px-4

                border
                border-gray-400
                rounded-sm
            ">
                <Icon
                icon-name="donate"
                >
                    <g v-html="getIconByName('donate')"></g>
                </Icon>
            </Button> -->
        </div>
    </aside>
</template>

<script>
import FetchIcons from '@/data/fetch-icons';

// import Icon from '@/components/atoms/Icon.vue';

// import Button from '@/components/atoms/Button.vue';

import moment from 'moment';
import numeral from 'numeral';

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
        },
        formatMoney(amount) {
            return numeral(amount).format('($0a)');
        }
    },
    components: {
        // Button,
        // Icon,
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
