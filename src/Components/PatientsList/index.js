import React, { Component } from 'react'

import { Container, Legend, LegendText, Row, Name, Text } from './style'

class PatientList extends Component {
    render() {
        return (
            <Container>
                <Legend>
                    <LegendText>Name</LegendText>
                    <LegendText>Contact</LegendText>
                    <LegendText>Adress</LegendText>
                    <LegendText>Date of brith</LegendText>
                </Legend>

                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(pat => (
                    <Row>
                        <Name>Marcin Miler</Name>
                        <Text>123-456-789</Text>
                        <Text>Strzelce Małe 98</Text>
                        <Text>11.07.1999</Text>
                    </Row>
                ))}
            </Container>
        )
    }
}

export default PatientList
