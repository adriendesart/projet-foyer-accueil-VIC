import React, { Component, Fragment } from 'react'
import profil from '../../img/thomas.jpg'
import './index.scss'

import Firebase from 'firebase'

class Identite extends Component {
    constructor(){
        super()

        let firestore = Firebase.firestore()
        let docRef = firestore.collection('Jeunes')

        Firebase.auth().onAuthStateChanged((user) => {
            if (user) {

                docRef.where("Id", "==", '7VnMVyFkzVRfc8ep8UXbHwEoKjv2')
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                    document.querySelector("#name").innerHTML = doc.data().Nom
                    document.querySelector("#mail").innerHTML = doc.data().Email
                    });
                })
                .catch(function(error) {
                   alert("Error getting documents: ", error);
                });   

            } else {
                console.log("non connecté")
            }
          });

    }

    render() {
        return (
            <Fragment>
                <div className="col-md-3 m-0 p-0">
                    <div className="imagediv">
                        <img className="photojeune" src={profil} alt="" srcset="" />
                    </div>
                </div>
                <div className="col-md-5 mt-2 p-0">
                    <ul className="logprofil">
                        <li className="mb-5 titlenomprenom" id="name"></li>
                        <li>26 Décembre 1992</li>
                        <li>(27 ans)</li>
                        <li>CHARLEROI</li>
                        <li className="mt-5" id="mail"></li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}
export default Identite






// Peut être inserer une @media query avec un mt-5  (  <div className="col-md-5 mt-2 p-0"> )