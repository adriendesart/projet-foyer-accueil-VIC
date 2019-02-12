import React, { Component } from 'react'

import './index.scss'

import Remarques from '../../components/Remarques'
import Identite from '../../components/identite'
import Agenda from '../../components/agenda'
import Document from '../../components/identite/components/document'
import Cpas from '../../components/identite/components/cpas'

class MonParrain extends Component {
	render() {
		return (
			<div className="row mentor parrain">
				<div className="col-md-12 section-fiche">
					<div className="offset-1 row justify-content-md-center contourjeune">
					<Identite />
					<div className="col-md-4 m-0 p-0">
                            <Document />
                            <Cpas />
                        </div>
                    </div>
					{/*component réalisé par thomas
					-> il faut le repasser en global*/}
				</div>
				<div className="col-md-7">
					<Remarques />
					{/*Fait appel à un component global remarques
					qui sera aussi utilisé pour la page coach*/}
				</div>
				<div className="col-md-5 section-agenda">
					<Agenda />
					{/*component réalisé par thomas
					-> il faut le repasser en global*/}
				</div> 
			</div>
		);
	}
}

export default MonParrain