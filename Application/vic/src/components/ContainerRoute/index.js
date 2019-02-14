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
import DetailLogement from './scenes/DetailLogement'

class ContainerRoute extends Component {
	render() {
		return (
			<Fragment>
				<Switch>
				<div className="row">
              		<div className="col-md-2 col-nav">
                		<Route exact path="/" component={NavAccueil} />
                		<Route path="/:profiljeune" component={NavJeune} />
              		</div>
              		<div className="col-md-10">
                		<Route path="/profiljeune" component={Profiljeune} />
          				<Route path="/monparrain" component={MonParrain} />
          				<Route path="/moncoach" component={MonCoach} />
          				<Route path="/mesformations" component={MesFormations} />
						<Route path="/DetailLogement" component={DetailLogement} />  
              		</div>
            	</div>
        		</Switch>
    		</Fragment>
		);
	}
}

export default ContainerRoute