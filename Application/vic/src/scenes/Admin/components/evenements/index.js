import React, { Component } from 'react'
import './index.scss'

class Evenements extends Component {
    render() {
        return (
    <div class="accordion" id="accordionExample275">
    <div class="card z-depth-0 bordered">
      <div class="card-header darkBlue" id="headingFour2">
        <h5 class="mb-0">
          <button class="btn btn-link four" type="button" data-toggle="collapse"
            data-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2">
            Événements ▼
          </button>
        </h5>
      </div>
      <div id="collapseFour2" class="collapse" aria-labelledby="headingFour2"
        data-parent="#accordionExample275">
        <div class="card-body">
        <form action="#" method="post">
                  <label for="titreevent"><b>Ajouter un titre</b></label><p></p>
                  <input type="text" id="fieldevent" name="fieldevent" placeholder="titre de l'événement"/><p></p>
                  <label for="contenu"><b>Description du job</b></label><p></p>
                  <input type="text" id="contenu" name="contenu" placeholder="description"/><p></p>
                  <label for="image">Choisir une image :</label><p></p>
                  <input type="file" id="imageevent" name="imageevent" accept="image/png, image/jpeg"/>
              </form>
        </div>
      </div>
    </div>
    </div>
      
        );
    }
}
export default Evenements
