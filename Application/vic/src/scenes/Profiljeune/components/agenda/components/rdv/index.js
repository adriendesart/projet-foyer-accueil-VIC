import React, { Component, Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

class Rdv extends Component {
    render() {
        return (
            <Fragment>
                    <div className="col-md-6">
                        <p>23|01</p>
                        <p>9:00</p>

                    </div>
                    <div className="col-md-6">
                        <p>Mon coach</p>
                        <p>Rendez-vous avec mon coach</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Lieu du rdv</p>
                    </div>
            </Fragment>
        );
    }
}
export default Rdv