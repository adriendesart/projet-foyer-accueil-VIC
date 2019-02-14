import React, { Component } from 'react'
import './index.scss'
import photo from '../../../../img/img.png'

 
class Jobcard extends Component {
    render(){
        return(
            <div className="card jobcard">
                <div className="d-flex wrapperImg">
                    <div>
                        <img src={photo} class="card-img-top" alt="sample" />
                    </div>
                    <div>Titre Cdi Lieu</div>
                </div>
                <div className="card-body d-flex flex-column">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn align-self-end">Voir plus</a>
                </div>
            </div>
        );
    }
}

export default Jobcard