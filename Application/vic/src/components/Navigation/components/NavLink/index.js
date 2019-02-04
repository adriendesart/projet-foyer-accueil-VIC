import React, { Component } from 'react'

import './index.scss'

class NavLink extends Component {
	render() {
		return (
			<a className="nav-link" href="#">
				{this.props.link}
			</a>	
		);
	}
}

export default NavLink