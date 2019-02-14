import React, { Component, Fragment } from 'react'
import './style.scss'
import Jobcard  from './components/Jobcard'


class MonJob extends Component {
    render() {
        return (
            <Fragment>

            <div className="row">
                <div className="col-md-8">
                    <h3>Mon Job</h3>
                </div>
            </div>

            <div className="container">    
                <div className="row">
                    <div className="col-md-8 d-flex flex-wrap justify-content-around">
                        <div className="separateur"><Jobcard/></div>
                        <div className="separateur"><Jobcard/></div>
                        <div className="separateur"><Jobcard/></div>

                        <div className="separateur"><Jobcard/></div>
                        <div className="separateur"><Jobcard/></div>
                        <div className="separateur"><Jobcard/></div>

                        <div className="separateur"><Jobcard/></div>
                        <div className="separateur"><Jobcard/></div>
                        <div className="separateur"><Jobcard/></div>
                    </div>{/* FIN 1ère partie de la row*/}
                   
                    <div className="col-md-3 filter-jobs">
                        <h3 className="">Filtrer</h3>
                        
                        <form>
                            <input type="text" placeholder="Recherche par mots-clés"></input>

                            <select name="Type de contrat">
                                <option selected disabled>Type de contrat</option>
                                <option value="CDI">Contrat à durée indeterminée</option>
                                <option value="CDD">Contrat à durée déterminée</option>
                                <option value="Interim">Intérimaire</option>
                                <option value="PFI">PFI</option>
                            </select> 

                            <select name="Lieu">
                                <option selected disabled>Lieu</option>
                                <option value="Flandre">Flandre</option>
                                <option value="Hainaut">Hainaut</option>
                                <option value="Bruxelles">Bruxelles</option>
                                <option value="Luxembourg">Luxembourg</option>
                            </select> 

                        </form>
                    </div>{/* FIN de la row*/}
                </div>
            
            </div>    

            </Fragment>
        );
    }
}

export default MonJob 

