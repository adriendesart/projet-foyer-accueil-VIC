import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import './App.scss'

// Import components globaux
import Header from './components/Header'
import Footer from './components/Footer'
import ContainerRoute from './components/ContainerRoute'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <div className="container-fluid wrapper-content">
            <ContainerRoute />
          </div>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App
