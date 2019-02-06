import React, { Component, Fragment } from 'react'
import profil from './thomas.jpg'

import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

class Profiljeune extends Component {
    render() {
        return (
            <Fragment>
                <div className="row justify-content-md-center contourjeune">
                    <div className="col-md-3 m-0 p-0">
                        <img className="photojeune" src={profil} alt="" srcset="" />
                    </div>
                    <div className="col-md-4 m-0 p-0">
                        <ul className="logprofil">
                            <li className="mb-5 titlenomprenom">Bailleux Thomas</li>
                            <li>26 Décembre 1992</li>
                            <li>(27 ans)</li>
                            <li>CHARLEROI</li>
                            <li className="mt-5">thomasbailleux2@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-md-4 m-0 p-0">
                        <p className="documents">Documents utiles <FontAwesomeIcon icon={faFileUpload} /></p>
                        <ul className="documentutile">
                            <li><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDownload} /> Document1</a></li>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDownload} /> Document2</a></li>
                            <li className="mb-3"><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDownload} /> Document 3</a></li>
                        </ul>
                        <p className="CPASprofiljeune">CPAS</p>
                        <p>Infos utiles par rapport au jeune</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 colonne-gauche">
                                <div>
                                    <p className="recemmentprofiljeune">Récemment</p>
                                    <p className="textrecemment p-0 m-0">Retrouve ici les derniers commentaires</p>
                                    <p className="textrecemment p-0 m-0"> de ton coach et de ton parain</p>
                                </div>

                                <div className="moncoachdiv">
                                    <p className="mt-5 coachColor">Mon coach</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia beatae accusamus reprehenderit similique consequuntur nulla,
                                quaerat perspiciatis doloremque illum porro facere laudantium est iure molestias excepturi, natus quo magnam.</p>
                                <button type="button" className="btn btn-primary float-right">Primary</button>
                                
                                </div>

                                {/* Ligne de séparation */}

                                <div>
                                    <p className="parrainColor parrainmargin">Mon parrain</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia beatae accusamus reprehenderit similique consequuntur nulla,
                                quaerat perspiciatis doloremque illum porro facere laudantium est iure molestias excepturi, natus quo magnam.</p>
                                <button type="button" className="btn btn-info float-right">Info</button>
                                </div>
                            </div>






                            <div className="col-md-4 colonne-droite">
                                <p className="agendaprofiljeune">Agenda</p>

                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }
}
export default Profiljeune
