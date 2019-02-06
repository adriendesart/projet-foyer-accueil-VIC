import React, { Component } from 'react'

import './index.scss'

class Remarque extends Component {
	render() {

		// condition logique pour l'affichage du bouton
		let button = null

		if(this.props.button){
			button = <button className="col-md-3 offset-md-6">{this.props.button}</button> 
		}

		// jsx
		return (
			<div className="col-md-10 offset-md-2 remarque">
				<div className="row d-flex flex-column">
					<h4 className="col-md-12">{ this.props.title }</h4>
					<p className="col-md-10">{this.props.text}</p>
					{ button }	
				</div>
			</div>
		);
	}
}

export default Remarque