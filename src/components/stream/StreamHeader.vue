<template lang="html">
    <header>
        <div class="header__title">
            <h1>{{ title }}</h1>
        </div>
        <StreamNavigation
        filter="AND({Instance} = 'demo', {Type} = 'General')"
        />
    </header>
</template>

<script>
import StreamNavigation from '@/components/stream/StreamNavigation.vue';

export default {
    props: ['title'],
    components: {
        StreamNavigation,
    },
};
</script>

<style lang="less">
@import '../../assets/styles/main/variables/screen-sizes';
@import '../../assets/styles/main/variables/elements';

@import '../../assets/styles/main/mixins/media-queries';

@import '../../assets/styles/main/components/stream/stream-header';
</style>
