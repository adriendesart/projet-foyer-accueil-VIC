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
					color="orange"
				/>
				<Link
					icon={faHome}
					title="Mon Logement"
					path="/monlogement"
					color="violet"
				/>
				<Link
					icon={faHandshake}
					title="Mon Parrain"
					path="/monparrain"
					color="turquoise"
				/>
				<Link
					icon={faFileSignature}
					title="Mon Coach"
					path="/moncoach"
					color="bleu"
				/>
				<Link
					icon={faGraduationCap}
					title="Mes Formations"
					path="/mesformations"
					color="green"
				/>
*/}			</nav>
		);
	}
}

export default NavJeune