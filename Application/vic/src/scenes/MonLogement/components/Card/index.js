import React, { Component } from 'react';
import './style.scss' // Importe le scss
import bitch from '../../../../img/maison.jpg'

class Card extends Component {
	render() {
		return (
			<div className="card logement-card mb-5">
                <img src={bitch} className="card-img-top" alt="Photo d'une maison"/>
                <div className="logement-card-body">
                    <p>contenu de la carte</p>
                </div>
            </div>
		);
	}
}

export default Card