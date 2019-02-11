import React, { Component } from 'react'
import './index.scss'

class Parrain extends Component {
    render() {
        return (
            <div>
                <p className="parrainColor parrainmargin">Mon parrain</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia beatae accusamus reprehenderit similique consequuntur nulla,
                    quaerat perspiciatis doloremque illum porro facere laudantium est iure molestias excepturi, natus quo magnam.</p>
                <button type="button" className="btn btn-info float-right">Info</button>
            </div>
        );
    }
}
export default Parrain