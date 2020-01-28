import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        panels: {
            stream: true,
            chat: true,
        }
    },
    getters: {
        stream: state => {
            return state.panels.stream
        }
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
        }
    },
    actions: {
    },
    modules: {
    }
})
