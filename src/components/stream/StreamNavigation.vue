<template lang="html">
    <nav>
        <ButtonList>
            <ButtonListItem class="
                hidden

                lg:block
                lg:border-l
            ">
                <Button
                    :class="panels.stream && panels.chat ? 'active' : ''"
                    :panelsToShow="['stream', 'chat']"
                >
                    <Icon icon-name="stream and chat">
                        <g v-html="getIconByName('stream and chat')"></g>
                    </Icon>
                    <span>Stream and chat</span>
                </Button>
            </ButtonListItem>
            <ButtonListItem
                class="
                    rounded-t-lg

                    lg:rounded-none
                "
            >
                <Button
                    :class="panels.stream && panels.chat === false ? 'active' : ''"
                    :panelsToShow="['stream']"
                >
                    <Icon icon-name="stream">
                        <g v-html="getIconByName('stream')"></g>
                    </Icon>
                    <span>Stream only</span>
                </Button>
            </ButtonListItem>
            <ButtonListItem
                class="
                    rounded-b-lg

                    lg:rounded-none
                "
            >
                <Button
                    :class="panels.chat && panels.stream === false ? 'active' : ''"
                    :panelsToShow="['chat']"
                >
                    <Icon icon-name="chat">
                        <g v-html="getIconByName('chat')"></g>
                    </Icon>
                    <span>Chat only</span>
                </Button>
            </ButtonListItem>
        </ButtonList>
        <button
            class="
                nav__cancel

                border
                border-gray-400
                fixed
                opacity-0
                px-2
                py-3
                rounded-lg
                text-left
                text-red-400

                lg:hidden
            "
            @click.prevent="toggleModal"
        >
            <span>Cancel</span>
        </button>
        <button
            class="
                nav__toggle

                lg:hidden
            "
            @click.prevent="toggleModal"
        >
            <Icon
                icon-color="#468302"
                icon-name="menu"
            >
                <g v-html="getIconByName('menu')">
                </g>
            </Icon>
        </button>
    </nav>
</template>

<script>
import Icon from '@/components/atoms/Icon.vue';
import ButtonList from '@/components/atoms/ButtonList.vue';
import ButtonListItem from '@/components/atoms/ButtonListItem.vue';
import Button from '@/components/atoms/Button.vue';

import { mapGetters } from 'vuex';

export default {
    methods: {
        toggleModal() {
            document.body.classList.toggle('overlay');
        },
        getIconByName(name) {
            if (this.icons.length) {
                return this.icons.find(icon => icon.fields.Name === name).fields.Code;
            }
            return '';
        },
    },
    computed: {
        ...mapGetters([
            'panels',
            'icons',
        ]),
    },
    props: [
        'filter',
    ],
    components: {
        Icon,
        ButtonList,
        ButtonListItem,
        Button,
    },
};
</script>

<style lang="less">
@import '../../assets/styles/main/variables/screen-sizes';
@import '../../assets/styles/main/variables/elements';
@import '../../assets/styles/main/variables/colors';

@import '../../assets/styles/main/mixins/media-queries';

@import '../../assets/styles/main/components/stream/stream-navigation';

.nav__cancel {
    background-color: white;
}
</style>
