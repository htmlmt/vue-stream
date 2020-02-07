import { fetchIcons } from '@/api';

const defaultState = {
	icons: [],
}

const actions = {
	getIcons: ({ commit }, data) => {
		const instance = data.instance;

		fetchIcons(instance)
		.then((response) => {
			commit( 'saveIcons', response );
		})
		.catch((error) => {
			// eslint-disable-next-line
			console.error(error);
		});
	}
}

const mutations = {
	saveIcons( state, icons ) {
		state.icons = icons;
	}
}

const getters = {
	icons: state => state.icons,
}

export default {
	state: defaultState,
	getters,
	actions,
	mutations,
};
