import React, { Component } from 'react'
import './index.scss'

class Formations extends Component {
    render() {
        return (

      <div class="accordion" id="accordionExample275">
      <div class="card z-depth-0 bordered">
        <div class="card-header green" id="headingOne2">
          <h5 class="mb-0">
            <button class="btn btn-link button" type="button" data-toggle="collapse" data-target="#collapseOne2"
              aria-expanded="true" aria-controls="collapseOne2">
              Formations ▼
            </button>
          </h5>
        </div>
        <div id="collapseOne2" class="collapse" aria-labelledby="headingOne2"
          data-parent="#accordionExample275">
          <div class="card-body">
          <form action="#" method="post">
                  <label for="titreformation"><b>Ajouter un titre</b></label><p></p>
                  <input type="text" id="fieldformation" name="fieldformation" placeholder="titre de la formation"/><p></p>
                  <label for="contenu"><b>Description du job</b></label><p></p>
                  <input type="text" id="contenu" name="contenu" placeholder="description"/><p></p>
                  <label for="image">Choisir une image :</label><p></p>
                  <input type="file" id="imageformation" name="imageformation" accept="image/png, image/jpeg"/>
              </form>
          </div>
        </div>
      </div>
      </div>

        );
    }
}
export default Formations

