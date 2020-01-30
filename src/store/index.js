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
        data: {
            participants: [],
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
        },
        fetchParticipant(state, payload) {
            let participantID = payload.participantID;
            let participant = findParticipantWithinData(state.data.participants, participantID);

            if (!participant) {
                axios({
                    url: `${state.apiUrl}/participants/${participantID}`,
                    auth: {
                        username: process.env.VUE_APP_DONORDRIVE_USERNAME,
                        password: process.env.VUE_APP_DONORDRIVE_PASSWORD,
                    },
                }).then((res) => {
                    state.data.participants.push(res.data);
                });
            }
        },
        fetchParticipantActivity(state, payload) {
            let participantID = payload.participantID;
            let participant = findParticipantWithinData(state.data.participants, participantID);

            let runFetch = false;

            if (!participant) {
                runFetch = true;
            } else {
                if (!participant.activity) {
                    runFetch = true;
                }
            }

            if (runFetch) {
                axios({
                    url: `${state.apiUrl}/participants/${participantID}/activity`,
                    auth: {
                        username: process.env.VUE_APP_DONORDRIVE_USERNAME,
                        password: process.env.VUE_APP_DONORDRIVE_PASSWORD,
                    },
                }).then((res) => {
                    state.data.participants.push(
                        {
                            activity: res.data,
                            participantID: parseInt(participantID),
                        }
                    );
                });
            }
        },
    },
    actions: {
    },
    modules: {
    },
});

function findObjectByValue(array, key, value) {
    var result = array.find(obj => {
        return obj[key] === value
    });

    return result;
}

function findParticipantWithinData(participants, participantID) {
    return findObjectByValue(participants, 'participantID', participantID);
}
