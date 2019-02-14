import React, { Component, Fragment } from 'react'
import './index.scss'



class Coordonnees extends Component {
    render() {
        return (
            <Fragment>
                <h3 className="titleformulaire2job mb-5 mt-5">Coordonnées</h3>
                <p className="coordonneesengras">Nom de l'entreprise</p>
                <p className="coordonneesengras">Personne de contact</p>
                <p className="coordonneesengras">Adresse</p>
            </Fragment>
        );
    }
}
export default Coordonnees