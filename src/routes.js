import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Views/Home'
import Navbar from './Components/Navbar'

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        )
    }
}

export default Routes
