import React, { Component } from 'react'

import './index.scss'

class FiltreForm extends Component {
	render() {
		return (
			<div className="row Form-filter">
				<form 
					action="#" 
					method="#" 
					className="col-md-10 offset-md-1 d-flex flex-column"
				>
					<h3>Filtrer</h3>
					<input 
						type="text"
						placeholder="Recherche par mots-clés"
					/>
					<select
						name="lieu"
						id="lieu">
						<option value="default">Choisissez un lieu</option>
						<option value="Bruxelles">Bruxelles</option>
						<option value="Charleroi">Charleroi</option>
					</select>
					<input 
						type="submit" 
						value="c'est parti"
						className="align-self-end"
					/>
				</form>
			</div>
		);
	}
}

export default FiltreForm