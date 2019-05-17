import React, { Component, Fragment } from 'react'
import Administration from './components/administration'
import Formations from './components/formations'
import Jobs from './components/jobs'
import Logements from './components/logements'
import Evenements from './components/evenements'
import Identiteadmin from '../../components/identiteadmin'
import './index.scss'



class Profiladmin extends Component {
    render() {
        return (
            <Fragment>
                <div className="lignetoutenbas">
                    <div className="offset-1 row justify-content-md-center contouradmin">
                        <Identiteadmin />
                    </div>
                   <Administration />
                    <Formations />
                    <Jobs />
                   <Logements />
                   <Evenements />
                </div>
            </Fragment>

                /* Fin du premier block  */
            );
        }
    } 
export default Profiladmin