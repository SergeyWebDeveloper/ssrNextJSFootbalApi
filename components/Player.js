import PropTypes from 'prop-types';

export const Player = ({player}) => {
	return(
		<li className="collection-item">
			<p><strong>Имя:</strong> {player.name}</p>
			<p><strong>Позиция:</strong> {player.position}</p>
			<p><strong>Номер:</strong> {player.jerseyNumber}</p>
			<p><strong>Д.р.</strong> {player.dateOfBirth}</p>
			<p><strong>Национальность:</strong> {player.nationality}</p>
			<p><strong>Контракт до:</strong> {player.contractUntil}</p>
		</li>
	)
};

Player.propTypes = {
	player: PropTypes.object.isRequired
};