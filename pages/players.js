import axios from 'axios';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {Layout} from '../components/Layout'
import {Player} from '../components/Player';


const Players = (props) => (
	<Layout>
		<Link href='/'><a className="waves-effect waves-light btn">Назад</a></Link>
		{props.playersTeam.players.length>0 && <h1>Игроки</h1>}
		{props.playersTeam.players.length > 0 ?
			<ul className="collection">
				{props.playersTeam.players.map(player => {
					return <Player key={player.name} player={player}/>
				})}
			</ul>
			:
			<h1>К сожалению, игроки для данной команды не найдены!</h1>
		}
	</Layout>
);

Players.propTypes = {
	playersTeam: PropTypes.object.isRequired
};

Players.getInitialProps = async (props) => {
	const res = await axios(`http://api.football-data.org/v1/teams/${props.query.id}/players`);
	const json = await res.data;
	return {playersTeam: json};
};

export default Players;