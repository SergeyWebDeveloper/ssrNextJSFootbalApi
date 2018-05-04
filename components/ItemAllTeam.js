import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const ItemAllTeam = ({caption, league, id}) => {
	return (
		<Link href={`/infoLeague?id=${id}`}>
			<a className="collection-item">
				<span className="badge">
					Лига: <strong>{league}</strong>
				</span>
				{caption}
			</a>
		</Link>
	)
};



ItemAllTeam.propTypes = {
	caption: PropTypes.string.isRequired,
	league: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
};

