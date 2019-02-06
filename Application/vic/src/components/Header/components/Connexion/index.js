import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

class Connexion extends Component {
	render() {
		return (
			<button className="sign-in">
				<FontAwesomeIcon icon={faSignInAlt} />
				Se connecter
			</button>
		);
	}
}

export default Connexion