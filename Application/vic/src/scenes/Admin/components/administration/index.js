import React, { Component } from 'react'
import './index.scss'

class Administration extends Component {
    render() {
        return (
    <div class="accordion" id="accordionExample275">
    <div class="card z-depth-0 bordered">
      <div class="card-header lightBlue" id="headingFive2">
        <h5 class="mb-0">
          <button class="btn btn-link five" type="button" data-toggle="collapse"
            data-target="#collapseFive2" aria-expanded="false" aria-controls="collapseFive2">
            Administration ▼
          </button>
        </h5>
      </div>
      <div id="collapseFive2" class="collapse" aria-labelledby="headingFive2"
        data-parent="#accordionExample275">
        <div class="card-body">
        <form action="#" method="post">
                  <label for="titreadmin"><b>Ajouter un titre</b></label><p></p>
                  <input type="text" id="fieldadmin" name="fieldadmin" placeholder="titre"/><p></p>
                  <label for="contenu"><b>Description du job</b></label><p></p>
                  <input type="text" id="contenu" name="contenu" placeholder="description"/><p></p>
                  <label for="image">Choisir une image :</label><p></p>
                  <input type="file" id="imageadmin" name="imageadmin" accept="image/png, image/jpeg"/>
              </form>
        </div>
      </div>
    </div>
    </div>
      
        );
    }
}
export default Administration
