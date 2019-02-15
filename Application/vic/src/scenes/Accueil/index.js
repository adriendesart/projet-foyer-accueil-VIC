import React, { Component, Fragment } from 'react'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../Accueil/components/logo.png'
import photoevent from '../Accueil/components/faudel.jpg'


class Accueil extends Component {
    render() {
        return (
            <Fragment>
                <div className="row"> {/*Div globale du logo, du titre et du descriptif */}
                    <div className="col-md-5 offset-md-1">
                        <img className="logoVic" src={logo} alt="" srcset="" /></div> {/* Logo Vic */}
                    <div className="col-md-4 titreVic"><h1>Société royale protectrice de l'enfance</h1>
                        <p className="text-justify descriptionVic">La société royale protectrice de l'enfance collabore avec quatre associations qui prennent en charge l'aspect pédagogique par une action de prévention ou encore par l'hébergement de jeunes au sein de leurs établissements. Ces services sont agréés par la Communauté Française Wallonie Bruxelles. </p></div>
                </div>

                <hr color="black"></hr> {/*Trait horizontal sous le logo et la description */}

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 offset-md-1 paEventTitle"> {/* pa = Page d'Accueil */}
                            <p>Evènements</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 offset-md-1 paEvent"> {/* A appeler 3 fois quand il sera devenu un component */}
                            <img className="paExempleEvent" src={photoevent} alt="" srcset="" /> {/* Photo illustratrice d'un event */}
                            <div className="paEventDate"> {/* Date de l'event */}
                                <span>12/03</span>
                            </div>
                            <p className="col-md-12 offset-md-1 paNameEvent">Concert de Faudel</p> {/* Nom de l'event */}
                        </div>

                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <button type="button" class="btnMore btn-primary col-md-2 offset-md-4">Afficher plus</button> {/*Bouton Afficher plus d'évènements */}
                    </div>
                </div>

                <hr color="black"></hr> {/*Trait horizontal sous les event */}

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 offset-md-1 paContactTitle">
                            <p>Nous contacter</p>
                        </div>
                        <div className="col-md-4 paInfo"><p>Coordonnées</p></div>
                    </div>

                    <form> {/* Mise en page du formulaire pas complète  */}
                        <div className="col-md-3 offset-md-1 paContactTitle ">
                            <input type="text" className="form-control" placeholder="Nom, Prénom"></input> {/*Champ texte et nom */}
                        </div>
                    </form>

                    <form>
                        <div className="col-md-3 offset-md-1 paMail ">
                            <input type="email" className="form-control" placeholder="Email"></input> {/*Champ mail */}
                        </div>
                    </form>

                    <form>
                        <div class="col-md-6 offset-md-1 paObjectMessage ">
                            <input type="text" className="form-control" placeholder="Objet du message"></input> {/*Objet du message */}
                        </div>
                    </form>

                    <form>
                        <textarea className="form-control col-md-6 offset-md-1 paMessage" placeholder="Votre message" rows="6"></textarea> {/*Champ pour le message */}
                    </form>

                    <button type="button" className="btnSend btn-primary col-md-2 offset-md-5">Envoyer</button> {/*Bouton envoyer */}

                </div>

            </Fragment>
        );
    }
}
export default Accueil

