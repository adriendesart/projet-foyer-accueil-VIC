import React, { Component, Fragment } from 'react'
import { Switch, Route } from "react-router-dom";

//Import components globaux
import NavAccueil from '../NavAccueil'
import NavJeune from '../NavJeune'

//Import des scenes
import MonParrain from '../../scenes/MonParrain'
import MonCoach from '../../scenes/MonCoach'
import MesFormations from '../../scenes/MesFormations'
import Profiljeune from '../../scenes/Profiljeune'
import DetailLogement from '../../scenes/DetailLogement'
import Postuler from '../../scenes/MonJob/components/Postuler'
import MonLogement from '../../scenes/MonLogement'
import MonJob from '../../scenes/MonJob'
import Accueil from '../../scenes/Accueil'
import SignUpPage from '../../scenes/Inscription'

class ContainerRoute extends Component {
	render() {
		return (
			<Fragment>
				<Switch>
				  <div className="row">
        		<div className="col-md-2 col-nav d-flex flex-column align-items-center">
              <Route exact path="/" component={NavAccueil} />
              <Route path="/:connexion" component={NavJeune} />
            </div>
              <div className="col-md-10">
								<Route exact path="/" component={Accueil} />
                <Route path="/profiljeune" component={Profiljeune} />
          			<Route path="/monparrain" component={MonParrain} />
          			<Route path="/moncoach" component={MonCoach} />
          			<Route path="/mesformations" component={MesFormations} />
                <Route path="/monlogement" component={MonLogement} />
								<Route path="/monjob" component={MonJob} />
                <Route path="/MonJob/Postuler" component={Postuler} />
                <Route path="/DetailLogement" component={DetailLogement} /> 
								<Route path="/Inscription" component={SignUpPage} /> 
              </div>
            </div>
        	</Switch>
    		</Fragment>
		);
	}
}

export default ContainerRoute