import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

import FormConn from './components/FormConn'

class Connexion extends Component { 

	render() {
		
		return (
			<Fragment>
				<button 
					className="sign-in"
					type="button"
					data-toggle="modal"
					data-target="#conn">

					<FontAwesomeIcon icon={faSignInAlt} />
					Se connecter
				</button>

				{/*Modal pour se connecter*/}
				<div
					className="modal fade modal-conn"
					id="conn"
					tabindex="-1" 
					role="dialog" 
					aria-labelledby="conn"
					aria-hidden="true">
	  				
	  				<div className="modal-dialog modal-dialog-centered" role="document">
	    				<div className="modal-content">
	      					<div className="modal-header">
	        					<h5 className="modal-title" id="modalcenter">Connecte toi à ton compte</h5>
	        					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
	          						<span aria-hidden="true">&times;</span>
	        					</button>
	      					</div>
	      					<div className="modal-body">
	        					{/*Formulaire de connexion*/}
	        					<FormConn/>
	      					</div>
	    				</div>
	  				</div>
				</div>	
			</Fragment>
		);
	}
}

export default Connexion