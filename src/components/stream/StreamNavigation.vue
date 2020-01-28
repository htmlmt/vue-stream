<template lang="html">
    <nav>
        <ul class="nav__buttons">
            <li class="buttons__both hide-on-mobile">
                <button @click="showPanels(['stream', 'chat'])" :class="panels.stream && panels.chat ? 'active' : ''">
                    <Icon
                    icon-name="stream and chat"
                    >
                        <g v-html="getIconByName('stream and chat')"></g>
                    </Icon>
                    <span>Stream and chat</span>
                </button>
            </li>
            <li class="buttons__stream">
                <button @click="showPanels(['stream'])" :class="panels.stream && panels.chat === false ? 'active' : ''">
                    <Icon
                    icon-name="stream"
                    >
                        <g v-html="getIconByName('stream')"></g>
                    </Icon>
                    <span>Stream only</span>
                </button>
            </li>
            <li class="buttons__chat">
                <button @click="showPanels(['chat'])" :class="panels.chat && panels.stream === false ? 'active' : ''">
                    <Icon
                    icon-name="chat"
                    >
                        <g v-html="getIconByName('chat')"></g>
                    </Icon>
                    <span>Chat only</span>
                </button>
            </li>
        </ul>
        <button href="/" class="nav__cancel hide-on-desktop" @click.prevent="toggleModal">
            <span>Cancel</span>
        </button>
        <button href="/" class="nav__toggle hide-on-desktop" @click.prevent="toggleModal">
            <Icon
            icon-name="menu"
            icon-color="#468302"
            >
                <g v-html="getIconByName('menu')"></g>
            </Icon>
        </button>
    </nav>
</template>

<script>
import FetchIcons from '@/data/fetch-icons';

import Icon from '@/components/atoms/Icon.vue';

export default {
    extends: FetchIcons,
    methods: {
        showPanels(panelsToShow) {
            document.body.classList.toggle('overlay');

            this.$store.commit("updatePanels", panelsToShow);
        },
        toggleModal() {
            document.body.classList.toggle('overlay');
        },
    },
    computed: {
        panels() {
            return this.$store.state.panels;
        }
    },
    props: [
        'filter',
    ],
    components: {
        Icon,
    },
};
</script>

<style lang="less">
@import '../../assets/styles/main/variables/screen-sizes';
@import '../../assets/styles/main/variables/elements';
@import '../../assets/styles/main/variables/colors';

@import '../../assets/styles/main/mixins/media-queries';

@import '../../assets/styles/main/components/stream/stream-navigation';
</style>
