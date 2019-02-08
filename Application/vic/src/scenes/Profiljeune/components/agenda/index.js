import React, { Component, Fragment } from 'react'

import Rdv from './components/rdv'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

class Agenda extends Component {
    render() {
        return (
            <Fragment>
                <p className="col-md-12 agendaprofiljeune">Agenda</p>
                <div className="row">
            <Rdv />
            <Rdv />
            <Rdv />
            <Rdv />
            <Rdv />

                </div>
            </Fragment>
        );
    }
}
export default Agenda