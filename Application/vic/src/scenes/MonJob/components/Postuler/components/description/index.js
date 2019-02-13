import React, { Component, Fragment } from 'react'
import './index.scss'



class Description extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-5">
                        <img className="imageformulairejob2" src="https://vide-maisons.org/images/picture/traitementPhoto.png" alt="" />
                    </div>
                    <div className="col-md-5">
                        <p className="deadlinepostuler">Deadline: 24/02/2019</p>
                        <p className="ptaillegeantjob2">Description du job</p>
                        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                    </div>
                </div>

            </Fragment>
        );
    }
}
export default Description