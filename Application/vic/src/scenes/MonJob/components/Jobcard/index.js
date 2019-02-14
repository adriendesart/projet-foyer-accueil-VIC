import React, { Component } from 'react'
import '../../style.scss'
import photo from '../../../../img/img.png'

class Jobcard extends Component {
    render(){
        return(
            <div className="jobcard d-flex align-items-start">
            <div className="row">

                <div className="col-md-4 card-h">{/* Photo */}
                    <img src={photo} />
                </div>      

                <div className="col-md-8 card-h">{/* infos txt */}
                    <p>Titre</p>
                    <p>CDI</p>
                    <p>Lieu</p>

                </div>

                <div className="col-md-12 card-body">{/* body */}
                <hr/>
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. 
                    Fusce non porttitor odio, non posuere metus.
                    Nunc vitae malesuada mi, sit amet commodo neque. 
                    
                    </p>

                </div>

                <div className="col-md-8 card-f"></div>{/* Footer/bouton */}
                
                <div className="col-md-4 card-f">
                    <button className="btn btn-primary">Voir plus</button>
                </div>
                
            </div>
        </div>
        );
    }
}

export default Jobcard