import React, { Component, Fragment } from 'react'
import Identite from '../../components/identite'
import Document from '../../components/identite/components/document'
import Cpas from '../../components/identite/components/cpas'
import Recemment from './components/recemment'
import Coach from './components/coach'
import Parrain from './components/parrain'
import Agenda from '../../components/agenda'
import './index.scss'

class Profiljeune extends Component {
    render() {
        return (
            <Fragment>
                <div className="lignetoutenbas">
                    <div className="offset-1 row justify-content-md-center contourjeune">
                        <Identite />
                        <div className="col-md-4 m-0 p-0">
                            <Document />
                            <Cpas />
                        </div>
                    </div>
                </div>

                {/* Fin du premier block  */}
                <div className="row">
                    <div className="offset-1 col-md-11">
                        <div className="row">
                            <div className="col-md-6 colonne-gauche">
                                <Recemment />
                                <Coach />

                                {/* Ligne de séparation */}

                                <Parrain />
                            </div>

                            {/* Colonne de droite */}
                            <div className="col-md-5 colonne-droite">
                                <Agenda />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }
}
export default Profiljeune
