import React, { Component, Fragment } from 'react'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../Accueil/components/logo.png'


class Accueil extends Component {
    render() {
        return (
            <Fragment>
                <div className = "row"> {/*Div globale du logo, du titre et du descriptif */}
                <div className="col-md-5 offset-md-1">
                <img className="logoVic" src={logo} alt="" srcset="" /></div> {/* Logo Vic */}
                <div className="col-md-4 titreVic"><h1>Société royale protectrice de l'enfance</h1>
                <p className="text-justify descriptionVic">La société royale protectrice de l'enfance collabore avec quatre associations qui prennent en charge l'aspect pédagogique par une action de prévention ou encore par l'hébergement de jeunes au sein de leurs établissements. Ces services sont agréés par la Communauté Française Wallonie Bruxelles. </p></div>
                </div>

                <hr color="black"></hr> {/*Trait horizontal sous le logo et la description */}

                <div class="container-fluid">
                <div class="row">
                <div className="col-md-8 offset-md-1 paEvent"> {/* pa = Page d'Accueil */}
                <p>Evènements</p>
                </div>
                </div>

                {/* <div class="col-sm">
                One of three columns
                </div>
                <div class="col-sm">
                One of three columns
                </div>*/}
        </div> 
            

            </Fragment>
        );
    }
}
export default Accueil