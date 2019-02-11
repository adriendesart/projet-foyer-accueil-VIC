import React, { Component, Fragment } from 'react'
import './style.scss'
import Jobcard  from './components/Jobcard'


class MonJob extends Component {
    render() {
        return (
            <Fragment>

            <div className="row">
                <div className="separateur"><Jobcard/></div>
                <div className="separateur"><Jobcard/></div>
                <div className="separateur"><Jobcard/></div>
            </div>

            <div className="row">
                <div className="separateur"><Jobcard/></div>
                <div className="separateur"><Jobcard/></div>
                <div className="separateur"><Jobcard/></div>
            </div>

            <div className="row">
                <div className="separateur"><Jobcard/></div>
                <div className="separateur"><Jobcard/></div>
                <div className="separateur"><Jobcard/></div>
            </div>
            

            </Fragment>
        );
    }
}

export default MonJob 

