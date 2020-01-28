<template lang="html">
    <a class="button" href="" target="_blank" rel="noopener">
        <div class="button__icon">
            <Icon icon-name="donate" icon-color="#ffffff">
                <g v-html="getIconByName('donate')"></g>
            </Icon>
        </div>
        <span class="button__text">Donate</span>
    </a>
</template>

<script>
import FetchIcons from '@/data/fetch-icons';
import Icon from '@/components/atoms/Icon.vue';

export default {
    extends: FetchIcons,
    name: 'Button',
    components: {
        Icon,
    },
};
</script>

<style lang="less">
@import '../../assets/styles/main/variables/colors';
@import '../../assets/styles/main/variables/elements';
@import '../../assets/styles/main/variables/fonts';
@import '../../assets/styles/main/variables/screen-sizes';

@import '../../assets/styles/main/mixins/media-queries';

@import '../../assets/styles/main/components/atoms/button';
</style>
