import React, { Component, Fragment } from 'react'
import profil from '../../img/img.png'
import './index.scss'

class Identiteadmin extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-2 m-0 p-0">
                    <div className="imagediv">
                        <img className="photoadmin" src={profil} alt="" srcset="" />
                    </div>
                </div>
                <div className="col-md-10 mt-2 p-0">
                        <p className="mb-2 titlenomprenom"><b>Kathleen VDB</b></p>
                        <p class="mb-2 titleadmin">Administrateur</p>
                </div>
            </Fragment>
        );
    }
}
export default Identiteadmin






// Peut être inserer une @media query avec un mt-5  (  <div className="col-md-5 mt-2 p-0"> )