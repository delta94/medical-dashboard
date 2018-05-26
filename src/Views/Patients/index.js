import React, { Component } from 'react'

import Fullscreen from '../../Components/Fullscreen'
import PatientList from '../../Components/PatientsList'

class Patients extends Component {
    render() {
        return (
            <Fullscreen>
                <PatientList />
            </Fullscreen>
        )
    }
}

export default Patients
