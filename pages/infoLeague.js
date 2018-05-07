import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import {Layout} from '../components/Layout'
import InfoTeamStatistic from '../components/InfoTeamStatistic';


const InfoLeague = (props) => (
	<Layout>
		<h1>{props.error ? props.error : props.tableInfo.leagueCaption}</h1>
		{!props.error && <table>
			<tbody>
			{props.tableInfo.standing ?
				props.tableInfo.standing.map((team) => {
					return <InfoTeamStatistic key={team.teamName} info={team}/>
				})
				: Object.keys(props.tableInfo.standings).map(elem => {
					return props.tableInfo.standings[elem].map(team => {
						return <InfoTeamStatistic key={team.teamId} info={team} championsLeague/>
					})
				})

			}
			</tbody>
		</table>}
	</Layout>
);

InfoLeague.propTypes = {
	tableInfo: PropTypes.object,
	error: PropTypes.string
};

InfoLeague.getInitialProps = async (props) => {
	return await axios(`http://api.football-data.org/v1/competitions/${props.query.id}/leagueTable`)
		.then(res => {
			return {
				tableInfo: res.data
			}
		})
		.catch(err => {
			return {
				error: err.response.statusText
			}
		});
};

export default InfoLeague;