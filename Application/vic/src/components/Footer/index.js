import React, { Component } from 'react'

import './index.scss'

class Footer extends Component {
	render() {
		return (
			<footer className="container-fluid">
				<div className="row d-flex justify-content-center">
					<p>&copy; SRPE - Société Royale Protectrice de l'enfance</p>
				</div>
			</footer>
		);
	}
}

export default Footer