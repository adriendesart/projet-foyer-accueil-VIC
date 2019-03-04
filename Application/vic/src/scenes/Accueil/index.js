import React, { Component, Fragment } from 'react'
import './index.scss'
import logo from '../Accueil/components/logo.png'
import photoevent from '../Accueil/components/faudel.jpg'


class Accueil extends Component {
    render() {
        return (
            <Fragment>
                <div className="row accueil-intro"> {/*Div globale du logo, du titre et du descriptif */}
                    <div className="col-md-5 offset-md-1">
                        <img src={logo} alt="" srcset="" />
                    </div> {/* Logo Vic */}
                    <div className="col-md-4">
                        <h1>Société royale protectrice de l'enfance</h1>
                        <p className="text-justify">La société royale protectrice de l'enfance collabore avec quatre associations qui prennent en charge l'aspect pédagogique par une action de prévention ou encore par l'hébergement de jeunes au sein de leurs établissements. Ces services sont agréés par la Communauté Française Wallonie Bruxelles. </p>
                    </div>
                </div>
                    
                <div className="row evenement">
                    <div className="col-md-10 offset-md-1"> {/* pa = Page d'Accueil */}
                        <h2>Evènements</h2>
                    </div>
                    <div className="col-md-10 offset-md-1">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="acc-img-wrapper">
                                    <img src={photoevent} alt=""/>
                                    <div className="paEventDate"> {/* Date de l'event */}
                                        <span>12/03</span>
                                    </div>
                                </div> {/* Photo illustratrice d'un event */}
                                <h3 className="col-md-12 offset-md-1">Concert de Faudel</h3> {/* Nom de l'event */}
                            </div>

                            <div className="col-md-4">
                                <div className="acc-img-wrapper">
                                    <img src={photoevent} alt=""/>
                                    <div className="paEventDate"> {/* Date de l'event */}
                                        <span>12/03</span>
                                    </div>
                                </div> {/* Photo illustratrice d'un event */}
                                <h3 className="col-md-12 offset-md-1">Concert de Faudel</h3> {/* Nom de l'event */}
                            </div>

                            <div className="col-md-4">
                                <div className="acc-img-wrapper">
                                    <img src={photoevent} alt=""/>
                                    <div className="paEventDate"> {/* Date de l'event */}
                                        <span>12/03</span>
                                    </div>
                                </div> {/* Photo illustratrice d'un event */}
                                <h3 className="col-md-12 offset-md-1">Concert de Faudel</h3> {/* Nom de l'event */}
                            </div>
                        </div>
                    </div>
                    {/*Bouton Afficher plus d'évènements */}
                    <div className="col-md-10 offset-md-1">
                        <div className="row d-flex justify-content-center">
                            <button type="button">Afficher plus</button>
                        </div>
                    </div>
                </div>


                <div className="row form-contact">
                    <div className="col-md-5 offset-md-1">
                        <h2>Nous contacter</h2>
                        <form className="row d-flex justify-content-end">
                            <input className="col-md-5 align-self-start" type="text" placeholder="Nom, Prénom"/>
                            <input className="col-md-6 offset-md-1" type="email" placeholder="Email"/>
                            <input className="col-md-12" type="text" placeholder="Objet du message"/>
                            <textarea className="col-md-12" rows="6">Votre message</textarea>
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <h2>Coordonnées</h2>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Accueil

