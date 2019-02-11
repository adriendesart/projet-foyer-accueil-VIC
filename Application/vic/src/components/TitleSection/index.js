import React, { Component } from 'react'

import './index.scss'

class TitleSection extends Component {
	render() {
		return(
			<h2>
				{this.props.title}
			</h2>
		);
	}
}

export default TitleSection