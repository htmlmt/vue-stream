import axios from 'axios';

const fetchCurrentParticipant = (id) => new Promise((resolve) => {
	if (id) {
		axios.get(`https://try.donordrive.com/api/participants/${id}`)
		.then((response) => {
			resolve(response.data);
		})
		.catch((error) => {
			// eslint-ignore-next-line
			console.error(error);
		});
	}
});

const fetchCurrentParticipantActivity = (id) => new Promise((resolve) => {
	if (id) {
		axios.get(`https://try.donordrive.com/api/participants/${id}/activity`)
		.then((response) => {
			resolve(response.data);
		})
		.catch((error) => {
			// eslint-ignore-next-line
			console.error(error);
		});
	}
});

const fetchIcons = (instance) => new Promise((resolve) => {
	const base = process.env.VUE_APP_AIRTABLE_BASE;
	const iconsUrl = `https://api.airtable.com/v0/${base}/Icons`;

	const airtableApiKey = process.env.VUE_APP_AIRTABLE_API_KEY;

	axios({
		url: iconsUrl,
		headers: {
			Authorization: `Bearer ${airtableApiKey}`,
		},
		params: {
            filterByFormula: `AND({Instance} = '${instance}', {Type} = 'General')`,
        },
	}).then((response) => {
		resolve(response.data.records);
	}).catch((error) => {
		// eslint-ignore-next-line
		console.error(error);
	});
});

export { fetchCurrentParticipant, fetchCurrentParticipantActivity, fetchIcons };
