import { fetchCurrentParticipant } from '@/api';

const defaultState = {
	currentParticipant: null,
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
	items: [
		{
			title: 'No activity',
			message: 'Hey! You should be the first to donate to this participant.',
			type: 'donation',
			amount: 0,
			noActivity: 'This participant has nothing to report.',
		}
	]
}

const actions = {
	getCurrentParticipant: ({ commit }, data) => {
		commit( 'setLoadingStatus', true );

		const id = data.id;

		fetchCurrentParticipant(id)
		.then((response) => {
			commit( 'setCurrentParticipant', response );

			const links = response.links;

			if (links) {
				const stream = response.links.stream;

				if (stream) {
					if (stream.includes('twitch')) {
						let param = stream.split('?')[1];
						let twitchUsername = param.substring(8, param.length);

						commit( 'setCurrentParticipantStreamLink', twitchUsername );
					}
				}

			}

			commit( 'setLoadingStatus', false );
		})
		.catch((error) => {
			// eslint-disable-next-line
			console.error(error);
		});
	}
}

const mutations = {
	setLoadingStatus( state, isLoading ) {
		state.isLoading = isLoading;
	},
	setCurrentParticipant( state, participant ) {
		state.currentParticipant = participant;
	},
	setCurrentParticipantStreamLink( state, twitchUsername ) {
		state.currentParticipantStreamLink = twitchUsername;
	},
	setCurrentParticipantActivity( state, activity ) {
		state.items = activity;
	},
	clearCurrentParticipant( state ) {
		state.currentParticipant = null;
	},
}

const getters = {
	isLoading: state => state.isLoading,
	currentParticipantId: state => state.currentParticipantId,
	currentParticipant: state => state.currentParticipant,
	currentParticipantStreamLink: state => state.currentParticipantStreamLink,
	items: state => state.items,
}

export default {
	state: defaultState,
	getters,
	actions,
	mutations,
};
