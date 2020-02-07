import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        panels: {
            stream: true,
            chat: true,
        },
        apiUrl: 'https://try.donordrive.com/api',
        currentParticipantID: 0,
        currentParticipant: {},
        currentParticipantActivity: [
            {
                title: 'No activity',
                message: 'Hey! You should be the first to donate to this participant.',
                type: 'donation',
                amount: 0,
                noActivity: 'This participant has nothing to report.',
            }
        ],
        currentParticipantStreamLink: '',
    },
    getters: {
        stream: state => {
            return state.panels.stream;
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
        setCurrentParticipantID(state, payload) {
            state.currentParticipantID = payload.currentParticipantID;
        },
        fetchParticipant(state, payload) {
            const participantID = payload.participantID;

            axios({
                url: `${state.apiUrl}/participants/${participantID}`,
            }).then((res) => {
                state.currentParticipant = res.data;
                if (res.data.links.stream) {
                    if (res.data.links.stream.includes('twitch')) {
                        const param = res.data.links.stream.split('?')[1];
                        const twitchUsername = param.substring(8, param.length);
                        state.currentParticipantStreamLink = twitchUsername;
                    }
                }
            });
        },
        fetchParticipantActivity(state, payload) {
            const participantID = payload.participantID;

            axios({
                url: `${state.apiUrl}/participants/${participantID}/activity`,
            }).then((res) => {
                if (res.data.length) {
                    state.currentParticipantActivity = res.data;
                }
            });
        },
    },
    actions: {
    },
    modules: {
    },
});
