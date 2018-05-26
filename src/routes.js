import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Views/Home'
import Patients from './Views/Patients'

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/patients" component={Patients} />
                </div>
            </Router>
        )
    }
}

export default Routes
