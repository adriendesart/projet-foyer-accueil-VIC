import React, { Component, Fragment } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



class Formulaire extends Component {
    render() {
        return (
            <Fragment>
                <h3 className="titleformulairejob mb-5 mt-5">Formulaire</h3>
                <p className="titleformulairejob2">Postuler directement à un job grace au formulaire.</p>
                <form>
                    <textarea class="form-control mb-5" id="exampleFormControlTextarea1" rows="5">Lettre de motivation, commentaire ...</textarea>
                    <div className="imagejobformulaire"><FontAwesomeIcon type="file" className="logoorange" icon={faPlus} /> <p className="textedroiteimage">Ajouter des documents (cv, etc...)</p>
                    </div>
                    <button className="buttonformulairejob mb-5" type="submit">Envoyer</button>
                </form>
            </Fragment>
        );
    }
}
export default Formulaire