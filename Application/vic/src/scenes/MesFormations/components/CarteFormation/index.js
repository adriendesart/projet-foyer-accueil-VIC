import React, { Component } from 'react'

import './index.scss'

import SampleImg from '../../../../img/becode.png'

class CarteFormation extends Component {
	render() {
		return (
			<div className="card carte-formation">
				<img src={SampleImg} class="card-img-top" alt="sample" />
				<div className="card-body d-flex flex-column">
					<h3 className="card-title">Titre formation</h3>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn align-self-end">Voir plus</a>
				</div>
			</div>
		);
	}
}

export default CarteFormation