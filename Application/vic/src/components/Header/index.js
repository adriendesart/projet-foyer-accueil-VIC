import React, { Component } from 'react'

import './index.scss'

import Langues from './components/Langues'
import Connexion from './components/Connexion'

class Header extends Component {
	render() {
		return (
			<header className="container-fluid fixed-top">
				<div className="row d-flex align-items-center">
					{/*affichage du choix des langues*/}
					<div className="col-md-2">
						<Langues />
					</div>
					{/*affichage Titre de l'application*/}
					<div className="col-md-8 d-flex justify-content-center">
						<h1>
							<a href="/"><span>Srpe</span> - Dashboard</a>
						</h1>
					</div>
					{/*affichage connexion ou profil*/}
					<div className="col-md-2 d-flex justify-content-center">
						<Connexion />
					</div>
				</div>
			</header>
		);
	}
}

export default Header
