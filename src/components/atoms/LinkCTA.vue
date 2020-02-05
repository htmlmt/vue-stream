<template lang="html">
    <a
        :href="link"
        class="
            button

            bg-green-400
            flex
            flex-wrap
            h-full
            items-center
            px-4
            rounded-lg
            text-center

            lg:font-bold
            lg:uppercase
        "
        rel="noopener"
        target="_blank"
    >
        <div
            class="
                button__icon

                flex
                items-center
                justify-center
                w-full

                lg:hidden
            "
        >
            <slot />
        </div>
        <span
            class="
                button__text

                flex
                items-start
                justify-center
                w-full

                lg:items-center
            "
        >{{ text }}</span>
    </a>
</template>

<script>
export default {
    name: 'LinkCTA',
    props: {
        text: {
            type: String,
            default: 'CTA',
        },
        link: {
            type: String,
            default: '#',
        },
    }
};
</script>

<style lang="less">
@import '../../assets/styles/main/variables/colors';
@import '../../assets/styles/main/variables/elements';
@import '../../assets/styles/main/variables/fonts';
@import '../../assets/styles/main/variables/screen-sizes';

@import '../../assets/styles/main/mixins/media-queries';

.button {
    color: white;
    font-family: @headingFont;
    font-size: 10px;
    transition-duration: @transition-duration;
    transition-property: background-color;
    width: 60px;

    .screen-lg ({
        font-size: 16px;
        padding: @lg-padding @xl-padding;
        width: 150px;
    });

    &:hover {
        background-color: darken(@green, 5%);
    }

    .button__icon {
        height: 70%;
    }

    .button__icon svg {
        height: 25px;
    }

    .button__text {
        height: 30%;
        line-height: 18px;

        .screen-lg ({
            height: 100%;
        });
    }
}
</style>
