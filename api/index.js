import axios from 'axios';

//default header auth token
axios.defaults.headers.common['X-Auth-Token'] = '1396067cb9b04bb8ae72da3196bae9af';

const URL = 'http://api.football-data.org/v1';

export const fetchAllTournament = () => {
	return axios.get(`${URL}/competitions/`);
};
