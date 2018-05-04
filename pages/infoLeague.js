import React from 'react';
import axios from 'axios';
import {Layout} from '../components/Layout'

const InfoLeague = (props) => (
	<Layout>
		{console.log(props)}
		<h1>Title</h1>
		<p>This is the blog post content.</p>
	</Layout>
);

InfoLeague.getInitialProps = async ({req}) => {
	console.log(req);
	// const res = await axios(`http://api.football-data.org/v1/competitions/${props.url.query.id}`);
	// const json = await res.data;
	// return { stars: json }
	return {};
};

export default InfoLeague;