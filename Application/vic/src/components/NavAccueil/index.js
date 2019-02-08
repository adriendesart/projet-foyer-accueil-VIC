import React, { Component } from 'react'

import './index.scss'

import NavLink from './components/NavLink'

class NavAccueil extends Component {
	render() {
		return (
			<nav className="row nav flex-column align-items-center nav-principal">
  				<NavLink link={'Accueil'} />
  				<NavLink link={'Evénements'} />
  				<NavLink link={'Contact'} />
			</nav>
		);
	}
}

export default NavAccueil