import React, { Component } from 'react'

import './index.scss'

import Remarque from './components/Remarque'

class Remarques extends Component {
	render() {
		return (
			<div className="row remarques">
				<div className="col-md-10 offset-md-2">
					<h3>Comptes rendus et commentaires</h3>
				</div>
				<Remarque 
					title="Erreur dans ton cv"
					text ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, minus, quo! Sit labore non, ducimus in a quod, unde? Magnam iste mollitia repellat, in laboriosam quos, facere aspernatur maxime natus!"
				/>
				<Remarque
					title="Compte rendu entretien du 06/01"
					text ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aliquam iure suscipit iste amet provident ducimus illum repudiandae qui, quam dolor. Vitae perspiciatis, odio ab, commodi esse tenetur perferendis nulla."
					button ="Télécharger"
				/>
				<Remarque
					title="Compte rendu entretien du 15/11"
					text ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolorum, tempora neque, dolor, quaerat fugit maiores excepturi dignissimos quidem explicabo quas eos doloribus aliquid ut. Officia, veniam recusandae vel rem."
					button ="Télécharger"
				/>
			</div>
		);
	}
}

export default Remarques