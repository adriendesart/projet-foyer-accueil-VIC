import React, { Component, Fragment } from 'react'
import Description from './components/description'
import Competence from './components/description/components/competence'
import Formulaire from './components/formulaire'
import Coordonnees from './components/formulaire/components/coordonnees'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

class Postuler extends Component {
    render() {
        return (
            <Fragment>
                <div className="row pt-5 pb-5">
                    <div className="offset-1 col-md-6">
                        <Description />
                    </div>
                    <div className="offset-1 col-md-4">
                        <Competence />
                    </div>

                    <div className="offset-1 col-md-7">
                        <Formulaire />
                    </div>
                    <div className="offset-1 col-md-3">
                        <Coordonnees />
                    </div>
                </div>
            </Fragment>

        );
    }
}
export default Postuler