import React, { Component } from 'react';
import './style.scss' // Importe le scss
import maison from '../../../../img/maison.jpg'

class Card extends Component {
	render() {
		return (
			<div className="card logement-card mb-5">
                <img src={maison} className="card-img-top" alt="Photo d'une maison"/>
                <div className="logement-card-body">
                    <div className="col-md-6 logement-card-info pt-3">
                        <p>Type</p>
                        <p>M²</p>
                        <p>Lieu</p>
                    </div>
                    <div className="col-md-6 pt-3">
                        <p>Prix</p>
                    </div>
                </div>
            </div>
		);
	}
}

export default Card