import React, { Component } from 'react'

import './index.scss'

class Langues extends Component {
	render() {
		return (
			<ul className="choix-langues row d-flex justify-content-center">
				<li><a href="#" className="active">Fr</a></li>
				<li><a href="#">Nl</a></li>
				<li><a href="#">Ar</a></li>
			</ul>
		);
	}
}

export default Langues