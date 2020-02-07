<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'app',
};
</script>

<style lang="less">
@import './assets/styles/main/variables/fonts';
@import './assets/styles/main/variables/screen-sizes';

@import './assets/styles/main/mixins/media-queries';

@import './assets/styles/main/app';
</style>
