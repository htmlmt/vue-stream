import axios from 'axios';

export default {
    data() {
        return {
            apiUrl: 'https://api.airtable.com/v0/',
            apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
            icons: [],
            base: process.env.VUE_APP_AIRTABLE_BASE,
        };
    },
    mounted() {
        if (!this.base) {
            return '';
        }
        return this.getIcons();
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
