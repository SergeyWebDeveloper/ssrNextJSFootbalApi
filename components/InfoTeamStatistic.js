import {Fragment} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const InfoTeamStatistic = ({info, championsLeague = false}) => {
	const arrTeamHref = !championsLeague && info._links.team.href.split('/');
	const idTeam = !championsLeague && arrTeamHref[arrTeamHref.length - 1];
	const imageNotFound = 'http://yachtpaints.ru/image/catalog/pages/page-404-icon.png';
	const image = info.crestURI ?
		<img src={info.crestURI} width='50' alt={info.teamName}/>
		:
		<img src={imageNotFound} width='50' alt={info.teamName}/>;
	return (
		<tr>
			{
				!championsLeague ?
					(<Fragment>
						<td>Место: {info.position}</td>
						<td>{image}</td>
						<td>{info.teamName}</td>
						<td>Очков: {info.points}</td>
						<td>Побед: {info.wins}</td>
						<td>Поражений: {info.losses}</td>
						<td style={{textAlign: 'center'}}>
							<Link href={`/players?id=${idTeam}`}><a className='btn waves-effect waves-light'>Игроки</a></Link>
						</td>
					</Fragment>)
					:
					(<Fragment>
						<td>Группа: {info.group}</td>
						<td>{image}</td>
						<td>{info.team}</td>
						<td>Место: {info.rank}</td>
						<td>Очков: {info.points}</td>
					</Fragment>)
			}
		</tr>
	)
};

InfoTeamStatistic.propTypes = {
	info: PropTypes.object.isRequired,
	championsLeague: PropTypes.bool
};

export default InfoTeamStatistic;