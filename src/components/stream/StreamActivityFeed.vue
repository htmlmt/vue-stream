<template lang="html">
    <aside class="streamer__activity-feed">
        <div class="activity-feed__feed">
            <ul class="feed__list">
                <li v-for="item in items" :key="item.id">
                    <div class="item__badge">
                        <Icon
                        :icon-name="item.icon"
                        >
                            <g v-html="getIconByName(item.icon)"></g>
                        </Icon>
                    </div>
                    <div class="item__description">
                        <p class="description__title">
                            <strong>{{ item.title }}</strong>
                        </p>
                        <p class="description__message">
                            {{ item.message }}
                        </p>
                        <p class="description__time">
                            {{ item.time }}
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

export default {
    extends: FetchIcons,
    data() {
        return {
            items: [
                {
                    id: 1,
                    iconType: 'image',
                    icon: 'recruitment',
                    title: 'New Team Badge!',
                    message: 'Recruit 10 Team Members',
                    time: '105 days',
                },
            ],
        };
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
