import React, { Component } from 'react'

import './index.scss'

class NavJeune extends Component {
	render() {
		return (
			<nav className="row nav flex-column align-items-center nav-jeune">
				<p>Mon job</p>
				<p>Logement</p>
				<p>Parrain</p>
				<p>Coach</p>
				<p>Formation</p>
			</nav>
		);
	}
}

export default NavJeune