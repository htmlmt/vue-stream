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
            <ActivityList
                :itemsShown="items.length == 1 ? 1 : 3"
                :totalItems="items.length"
            >
                <ActivityListItem
                    :key="item.createdDateUTC"
                    :totalItems="items.length"
                    v-for="item in items"
                >
                    <ActivityBadge
                        :item="item"
                    />
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
                        <ActivityListItemText
                            class="description__title"
                            v-if="item.title"
                        >
                            {{ item.title }}
                        </ActivityListItemText>
                        <ActivityListItemText
                            class="description__message"
                            v-if="item.message"
                        >
                            {{ item.message }}
                        </ActivityListItemText>
                        <ActivityListItemSmallText v-if="item.createdDateUTC">
                            {{ item.createdDateUTC | formatDate }}
                        </ActivityListItemSmallText>
                        <ActivityListItemSmallText v-else>
                            {{ item.noActivity }}
                        </ActivityListItemSmallText>
                    </div>
                </ActivityListItem>
            </ActivityList>
        </div>
        <div class="
            activity-feed__button

            flex
            items-center
            py-4
        ">
            <LinkCTA>
                <BaseIcon
                    icon-color="white"
                    icon-name="donate"
                >
                    <g v-html="getIconByName('donate')"></g>
                </BaseIcon>
            </LinkCTA>
        </div>
    </aside>
</template>

<script>
import BaseIcon from "@/components/atoms/BaseIcon.vue";
import LinkCTA from "@/components/atoms/LinkCTA.vue";

import ActivityBadge from "@/components/organisms/activity/ActivityBadge.vue";
import ActivityList from "@/components/organisms/activity/ActivityList.vue";
import ActivityListItem from "@/components/organisms/activity/ActivityListItem.vue";
import ActivityListItemSmallText from "@/components/organisms/activity/ActivityListItemSmallText.vue";
import ActivityListItemText from "@/components/organisms/activity/ActivityListItemText.vue";

import moment from "moment";

import { mapGetters } from "vuex";

export default {
    name: "TheActivity",
    components: {
        BaseIcon,
        LinkCTA,
        ActivityBadge,
        ActivityList,
        ActivityListItem,
        ActivityListItemSmallText,
        ActivityListItemText,
    },
    filters: {
        formatDate(date) {
            return moment(date).fromNow();
        },
    },
    computed: {
        ...mapGetters([
            "items",
            "icons",
        ]),
    },
    methods: {
        getIconByName(name) {
            if (this.icons.length) {
                return this.icons.find(icon => icon.fields.Name === name).fields.Code;
            }
            return "";
        },
    },
};
</script>

<style lang="less">
@import "../../../assets/styles/main/variables/elements";
@import "../../../assets/styles/main/variables/colors";
@import "../../../assets/styles/main/variables/screen-sizes";

@import "../../../assets/styles/main/mixins/media-queries";

@import "../../../assets/styles/main/components/organisms/activity/activity-feed";

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
