import React, { Component } from 'react'

import CarteFormation from './components/CarteFormation'
import TitleSection from '../../components/TitleSection'
import FiltreForm from '../../components/FiltreForm'
import Pagination from '../../components/Pagination'

import './index.scss'

class MesFormations extends Component {
	render() {
		return (
			<div className="row section-formations">
				<div className="col-md-11 offset-md-1">
					<TitleSection title="Mes formations"/>
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
				<div className="col-md-3 col-filter">
					<FiltreForm />
				</div>
				<div className="col-md-11 offset-md-1">
					<Pagination />
				</div>
			</div> 
		);
	}
}

export default MesFormations