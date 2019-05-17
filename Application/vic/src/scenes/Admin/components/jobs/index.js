import React, { Component } from 'react'
import './index.scss'

class Jobs extends Component {
    render() {
        return (
    <div class="accordion" id="accordionExample275">
    <div class="card z-depth-0 bordered">
      <div class="card-header orange" id="headingTwo2">
        <h5 class="mb-0">
          <button class="btn btn-link input" type="button" data-toggle="collapse"
            data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
            Jobs ▼
          </button>
        </h5>
      </div>
      <div id="collapseTwo2" class="collapse" aria-labelledby="headingTwo2"
        data-parent="#accordionExample275">
        <div class="card-body">
        <form action="#" method="post">
                  <label for="titrejob"><b>Ajouter un titre</b></label><p></p>
                  <input type="text" id="fieldjob" name="fieldjob" placeholder="titre du job"/><p></p>
                  <label for="contenu"><b>Description du job</b></label><p></p>
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
export default Jobs
