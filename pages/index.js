import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Layout} from '../components/Layout';
import {ItemAllTeam} from '../components/ItemAllTeam';

axios.defaults.headers.common['X-Auth-Token'] = '1396067cb9b04bb8ae72da3196bae9af';

class Index extends Component {

	static async getInitialProps() {
		const res = await axios('http://api.football-data.org/v1/competitions/');
		const info = await res.data;
		return {infoAllLiga: info}
	};

	render() {
		return (
			<Layout>
				<h1 style={{margin: '15px 0', fontSize: '30px', textAlign: 'center'}}>Выберите лигу</h1>

				{this.props.infoAllLiga.length > 0 ?
					<div className="collection">
						{this.props.infoAllLiga.map(leagueItem => {
							return <ItemAllTeam
								id={leagueItem.id}
								key={leagueItem.id}
								caption={leagueItem.caption}
								league={leagueItem.league}
							/>;
						})}
					</div>
					:
					null
				}
			</Layout>
		)
	}
}


Index.propTypes = {
	infoAllLiga: PropTypes.array.isRequired
};


export default Index;
