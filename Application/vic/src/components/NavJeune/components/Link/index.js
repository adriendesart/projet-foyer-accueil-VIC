import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'


class Link extends Component {
	render() {
		return (
			<Fragment>
				<a href={this.props.path} className="d-flex flex-column align-items-center nav-jeune-link">
					<FontAwesomeIcon icon={this.props.icon} className={`fa-4x link-${this.props.color}`}/>
					{this.props.title}
				</a>
			</Fragment>
		);
	}
}

export default Link