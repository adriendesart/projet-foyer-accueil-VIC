import React, { Component, Fragment } from 'react'
import './style.scss'
import Jobcard  from './components/Jobcard'
import TitleSection from '../../components/TitleSection'
import FiltreForm from '../../components/FiltreForm'
import Pagination from '../../components/Pagination'
 

class MonJob extends Component {
    render() {
        return (
            <div className="row section-job">
                <div className="col-md-11 offset-md-1">
                    <TitleSection title="Mon job"/>
                </div>
   
                <div className="col-md-8 offset-md-1">
                    <div className="row d-flex justify-content-between">
                        <Jobcard/>
                        <Jobcard/>
                        <Jobcard/>
                        <Jobcard/>
                        <Jobcard/>
                        <Jobcard/>
                        <Jobcard/>
                        <Jobcard/>
                        <Jobcard/>
                    </div>
                </div>

                <div className="col-md-3 col-filter">
                    <FiltreForm />
                </div>
                <div className="col-md-11 offset-md-1">
                    <Pagination />
                </div>
            </div>
        );
    }
}

export default MonJob 

