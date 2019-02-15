import React, { Component, Fragment } from 'react'

import Rdv from './components/rdv'

import './index.scss'

class Agenda extends Component {
    render() {
        return (
            <Fragment>
                <p className="agendaprofiljeune">Agenda</p>
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