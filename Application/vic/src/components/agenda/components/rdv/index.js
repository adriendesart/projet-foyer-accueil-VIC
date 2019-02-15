import React, { Component } from 'react'

import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class Rdv extends Component {
    render() {
        return (
            <div className="col-md-10 offset-md-2 rdv-box">
                <div className="row">
                    <div className="col-md-3 date">
                        <p>23|01</p>
                        <p>9:00</p>
                    </div>
                    <div className="col-md-9 description">
                        <h3>Titre</h3>
                        <p>Description du rendez-vous</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Lieu du rdv</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Rdv