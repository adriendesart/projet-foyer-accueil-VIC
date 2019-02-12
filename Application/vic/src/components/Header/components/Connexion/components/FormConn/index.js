import React, { Component } from 'react'

const FormConn = ({ profile }) => {
	return (
		<form
      onSubmit={profile} 
      className="form-conn">
  			<div className="form-group">
  				<input
  					type="email" 
  					className="form-control"
  					placeholder="Email"/>
  			</div>
  			<div className="form-group">
  				<input 
  					type="password"
  					className="form-control"
  					placeholder="Mot de passe"/>
  			</div>
  			<div className="form-group form-check">
  				<input
  					type="checkbox"
  					className="form-check-input"
  					id="remember"/>
  				<label 
  					className="form-check-label"
  					for="remember">
  					Se souvenir de moi
  				</label>
  			</div>
  			<button
  				type="submit"
  				className="btn">
            Se connecter
        </button>
		</form>
	);
}

export default FormConn