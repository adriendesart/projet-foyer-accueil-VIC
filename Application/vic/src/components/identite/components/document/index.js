import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

class Document extends Component {
    render() {
        return (
            <Fragment>
                <p className="documents">Documents utiles <FontAwesomeIcon icon={faFileUpload} /></p>
                <ul className="documentutile">
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDownload} /> Document1</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDownload} /> Document2</a></li>
                    <li className="mb-3"><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDownload} /> Document 3</a></li>
                </ul>



            </Fragment>
        );
    }
}
export default Document