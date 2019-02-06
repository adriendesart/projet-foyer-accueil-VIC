import React, { Component, Fragment } from 'react'

import './App.scss'

// Import components globaux
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'



// Import scenes
import MonParrain from './scenes/MonParrain'
import MonCoach from './scenes/MonCoach'
import MesFormations from './scenes/MesFormations'
import Profiljeune from './scenes/Profiljeune'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-nav">
              <Navigation />
            </div>
            <div className="col-md-10">
              <Profiljeune />
              {/* <MonParrain /> */}
              {/* <MonCoach /> */}
              {/* <MesFormations/> */}
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App
