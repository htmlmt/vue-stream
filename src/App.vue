<template>
    <div id="app">
        <SkipLink content="Skip to main content" />
        <Stream />
    </div>
</template>

<script>
import axios from 'axios';
import SkipLink from '@/components/atoms/SkipLink.vue';
import Stream from '@/components/stream/Stream.vue';

export default {
    name: 'App',
    components: {
        SkipLink,
        Stream,
    },
    methods: {
        getIconByName(name) {
            if (this.icons.length) {
                return this.icons.find(icon => icon.fields.Name === name).fields.Code;
            }
            return '';
        },
        getIcons() {
            axios({
                url: `${this.apiUrl + this.base}/Icons`,
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                },
                params: {
                    filterByFormula: this.filter || '',
                },
            }).then((res) => {
                this.icons = res.data.records;
            });
        },
    },
};
</script>

<style lang="less">
@import './assets/styles/main/variables/fonts';
@import './assets/styles/main/variables/screen-sizes';

@import './assets/styles/main/mixins/media-queries';

@import './assets/styles/main/app';
</style>
