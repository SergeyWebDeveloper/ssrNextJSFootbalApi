import Link from 'next/link';

const InfoTeamStatistic = ({info}) => {
	const arrTeamHref = info._links.team.href.split('/');
	const idTeam = arrTeamHref[arrTeamHref.length-1];
	const imageNotFound = 'http://yachtpaints.ru/image/catalog/pages/page-404-icon.png';
	return (
		<tr>
			<td>Место: {info.position}</td>
			<td>
				{info.crestURI ?
					<img src={info.crestURI} width='50' alt={info.teamName}/>
					:
					<img src={imageNotFound} width='50' alt={info.teamName}/>

				}
			</td>
			<td>{info.teamName}</td>
			<td>Очков: {info.points}</td>
			<td>Побед: {info.wins}</td>
			<td>Поражений: {info.losses}</td>
			<td style={{textAlign: 'center'}}>
				<Link href={`/players?id=${idTeam}`}><a className='btn waves-effect waves-light'>Игроки</a></Link>
			</td>
		</tr>
	)
};

export default InfoTeamStatistic;