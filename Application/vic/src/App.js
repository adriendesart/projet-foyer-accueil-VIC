import React, { Component, Fragment } from 'react'

import './App.scss'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Profiljeune from './scenes/Profiljeune'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Navigation />
            </div>
            <div className="col-md-10">
            <Profiljeune />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App
