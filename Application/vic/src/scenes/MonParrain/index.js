import React, { Component } from 'react'

import './index.scss'

import Remarques from '../../components/Remarques'

class MonParrain extends Component {
	render() {
		return (
			<div className="row mentor parrain">
				<div className="col-md-12 section-fiche">
					Component Ficheperso
					{/*component réalisé par thomas
					-> il faut le repasser en global*/}
				</div>
				<div className="col-md-7">
					<Remarques />
					{/*Fait appel à un component global remarques
					qui sera aussi utilisé pour la page coach*/}
				</div>
				<div className="col-md-5 section-agenda">
					Component Agenda
					{/*component réalisé par thomas
					-> il faut le repasser en global*/}
				</div> 
			</div>
		);
	}
}

export default MonParrain