import React, { Component } from 'react'

import './index.scss'

class TitleSection extends Component {  // le composant n'utilse pas de logique , il sera plus performant si on le remplace par un Presentational: const TitleSection = () => {return (<div>...</div>);};
	render() {
		return(
			<h2>
				{this.props.title}
			</h2>
		);
	}
}

export default TitleSection