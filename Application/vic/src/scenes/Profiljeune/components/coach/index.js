import React, { Component } from 'react'
import './index.scss'

class Coach extends Component {
    render() {
        return (
            <div className="moncoachdiv">
                <p className="mt-5 coachColor">Mon coach</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia beatae accusamus reprehenderit similique consequuntur nulla,
                quaerat perspiciatis doloremque illum porro facere laudantium est iure molestias excepturi, natus quo magnam.</p>
                <button type="button" className="btn btn-primary float-right">Primary</button>
            </div>
        );
    }
}
export default Coach