import React, { Component } from 'react';
import './style.scss' // Importe le scss
import photo from '../../../../img/maison.jpg'

const Card = ({ type, taille, lieu, prix }) => {
	return (
		<div className="card logement-card mb-5">
            <img src={photo} className="card-img-top" alt="Photo d'une maison"/>
            <div className="logement-card-body">
                <div className="col-md-7 logement-card-info pt-3">
                    <p>{type}</p>
                    <p>{taille}</p>
                    <p>{lieu}</p>
                </div>
                <div className="col-md-5 pt-3">
                    <div className="row logement-card-body-upper">
                        <div className="col-md-12">
                            <p>{prix}</p>
                        </div>
                    </div>
                    <div className="row logement-card-body-bottom">
                        <div className="col-md-12 p-0">
                            <button type="button" className="logement-button py-2">Plus d'info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Card