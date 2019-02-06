import React, { Component } from 'react'

import CarteFormation from './components/CarteFormation'

class MesFormations extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-11 offset-md-1">
					Component titre
				</div>
				<div className="col-md-8 offset-md-1">
					<div className="row d-flex justify-content-between">
						<CarteFormation />
						<CarteFormation />
						<CarteFormation />
						<CarteFormation />
						<CarteFormation />
						<CarteFormation />
						<CarteFormation />
						<CarteFormation />
						<CarteFormation />
					</div>
				</div>
				<div className="col-md-3">
					component filtre
				</div>
				<div className="col-md-11 offset-md-1">
					Component pagination
				</div>
			</div>
		);
	}
}

export default MesFormations