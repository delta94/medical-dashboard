import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Views/Home'
import Patients from './Views/Patients'
import AddPatient from './Views/AddPatient'

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/patients" component={Patients} />
                    <Route
                        exact
                        path="/patients/addPatient"
                        component={AddPatient}
                    />
                </div>
            </Router>
        )
    }
}

export default Routes
