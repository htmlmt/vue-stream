import Vue from 'vue';
import Vuex from 'vuex';

import participantsModule from './modules/participants';
import iconsModule from './modules/icons';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        panels: {
            stream: true,
            chat: true,
        },
    },
    mutations: {
        updatePanels(state, payload) {
            let panelsShown = Object.keys(state.panels);

            for (const panelShown of panelsShown) {
                if (payload.indexOf(panelShown) >= 0) {
                    state.panels[panelShown] = true;
                } else {
                    state.panels[panelShown] = false;
                }
            }
        },
    },
    getters: {
        panels: state => state.panels,
    },
    modules: {
        participants: participantsModule,
        icons: iconsModule,
    },
});
