import React, { Component, Fragment } from 'react';
import './style.scss' // Importe le scss

import Card from './components/Card' // Importe le/les cartes
import FiltreForm from '../../components/FiltreForm'; // Importe le filtre

class MonLogement extends Component {
	render() {
		return (
			<Fragment>
				<div className="row mt-5">
					<div className="col-md-8 offset-md-1 logement-page-title">
						<h2>Mon Logement</h2>
					</div>
					<div className="col-md-3 logement-found">
						<p>08 Logements trouvés</p>
					</div>
				</div>
				<div className="row mt-5 mb-4">
					<div className="col-md-8 offset-md-1 logement-cards">
						<Card type='Maison 3F' taille='504m²' lieu='Wangenies' prix='249.000€'/>
						<Card type='Appartement' taille='120m²' lieu='Charleroi' prix='120 000€'/>
						<Card type='Maison' taille='120m²' lieu='Charleroi' prix='120 000€'/>
						<Card type='Maison' taille='120m²' lieu='Charleroi' prix='120 000€'/>
						<Card type='Appartement' taille='120m²' lieu='Charleroi' prix='120 000€'/>
						<Card type='Appartement' taille='120m²' lieu='Charleroi' prix='120 000€'/>
						<Card type='Maison' taille='120m²' lieu='Charleroi' prix='120 000€'/>
						<Card type='Maison' taille='120m²' lieu='Charleroi' prix='120 000€'/>
					</div>
					<div className="col-md-3 logement-filtre">
						<FiltreForm />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default MonLogement