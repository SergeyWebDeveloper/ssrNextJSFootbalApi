import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {Layout} from '../components/Layout'
import InfoTeamStatistic from '../components/InfoTeamStatistic';

const InfoLeague = (props) => (
	<Layout>
		<Link href='/'><a className="waves-effect waves-light btn">Назад</a></Link>
		<h1>{props.tableInfo.leagueCaption}</h1>
		<table>
			<tbody>
			{props.tableInfo.standing.map((team) => {
				return <InfoTeamStatistic key={team.teamName} info={team}/>
			})}
			</tbody>
		</table>
	</Layout>
);

InfoLeague.propTypes = {
	tableInfo: PropTypes.object.isRequired
};

InfoLeague.getInitialProps = async (props) => {
	const res = await axios(`http://api.football-data.org/v1/competitions/${props.query.id}/leagueTable`);
	const json = await res.data;
	return {tableInfo: json};
};

export default InfoLeague;