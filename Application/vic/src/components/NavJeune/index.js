import React, { Component } from 'react'
import Link from './components/Link'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faFileSignature } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

class NavJeune extends Component {
	render() {
		return (
			<nav className="row nav flex-column align-items-center nav-jeune">
				<Link
					icon={faBriefcase}
					title="Mon Job"
					path="/monjob"
				/>
				<Link
					icon={faHome}
					title="Mon Logement"
					path="/monlogement"
				/>
				<Link
					icon={faHandshake}
					title="Mon Parrain"
					path="/monparrain"
				/>
				<Link
					icon={faFileSignature}
					title="Mon Coach"
					path="/moncoach"
				/>
				<Link
					icon={faGraduationCap}
					title="Mes Formations"
					path="/mesformations"
				/>
*/}			</nav>
		);
	}
}

export default NavJeune