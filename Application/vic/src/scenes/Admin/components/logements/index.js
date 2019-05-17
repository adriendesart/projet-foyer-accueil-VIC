import React, { Component } from 'react'
import './index.scss'

class Logements extends Component {
    render() {
        return (
            <div class="accordion" id="accordionExample275">
                <div class="card z-depth-0 bordered">
                    <div class="card-header violet" id="headingThree2">
                        <h5 class="mb-0">
                            <button class="btn btn-link coll" type="button" data-toggle="collapse"
                            data-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
                            Logements  ▼
                            </button>
                        </h5>
                     </div>
                <div id="collapseThree2" class="collapse" aria-labelledby="headingThree2"
                data-parent="#accordionExample275">
                <div class="card-body">
                    <form action="#" method="post">
                        <label for="titrelogement"><b>Ajouter un titre</b></label><p></p>
                        <input type="text" id="fieldlogement" name="fieldlogement" placeholder="titre du logement"/><p></p>
                        <label for="contenu"><b>Description du logement</b></label><p></p>
                        <input type="text" id="contenu" name="contenu" placeholder="description"/><p></p>
                        <label for="image">Choisir une image :</label><p></p>
                        <input type="file" id="imagejob" name="imagejob" accept="image/png, image/jpeg"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
        );
    }
}
export default Logements
