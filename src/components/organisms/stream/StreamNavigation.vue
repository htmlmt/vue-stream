<template lang="html">
    <nav>
        <ButtonList>
            <ButtonListItem class="
                hidden

                lg:block
                lg:border-l
            ">
                <BaseButton
                    :class="panels.stream && panels.chat ? 'active' : ''"
                    :panelsToShow="['stream', 'chat']"
                >
                    <BaseIcon icon-name="stream and chat">
                        <g v-html="getIconByName('stream and chat')"></g>
                    </BaseIcon>
                    <span>Stream and chat</span>
                </BaseButton>
            </ButtonListItem>
            <ButtonListItem
                class="
                    rounded-t-lg

                    lg:rounded-none
                "
            >
                <BaseButton
                    :class="panels.stream && panels.chat === false ? 'active' : ''"
                    :panelsToShow="['stream']"
                >
                    <BaseIcon icon-name="stream">
                        <g v-html="getIconByName('stream')"></g>
                    </BaseIcon>
                    <span>Stream only</span>
                </BaseButton>
            </ButtonListItem>
            <ButtonListItem
                class="
                    rounded-b-lg

                    lg:rounded-none
                "
            >
                <BaseButton
                    :class="panels.chat && panels.stream === false ? 'active' : ''"
                    :panelsToShow="['chat']"
                >
                    <BaseIcon icon-name="chat">
                        <g v-html="getIconByName('chat')"></g>
                    </BaseIcon>
                    <span>Chat only</span>
                </BaseButton>
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
            <BaseIcon
                icon-color="#468302"
                icon-name="menu"
            >
                <g v-html="getIconByName('menu')">
                </g>
            </BaseIcon>
        </button>
    </nav>
</template>

<script>
import BaseButton from "@/components/atoms/BaseButton.vue";
import BaseIcon from "@/components/atoms/BaseIcon.vue";
import ButtonList from "@/components/atoms/ButtonList.vue";
import ButtonListItem from "@/components/atoms/ButtonListItem.vue";

import { mapGetters } from "vuex";

export default {
    name: "StreamNavigation",
    components: {
        BaseButton,
        BaseIcon,
        ButtonList,
        ButtonListItem,
    },
    computed: {
        ...mapGetters([
            "panels",
            "icons",
        ]),
    },
    methods: {
        toggleModal() {
            document.body.classList.toggle("overlay");
        },
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
@import "../../../assets/styles/main/variables/screen-sizes";
@import "../../../assets/styles/main/variables/elements";
@import "../../../assets/styles/main/variables/colors";

@import "../../../assets/styles/main/mixins/media-queries";

@import "../../../assets/styles/main/components/organisms/stream/stream-navigation";

.nav__cancel {
    background-color: white;
}
</style>
