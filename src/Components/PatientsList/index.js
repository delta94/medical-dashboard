import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {
    Legend,
    LegendText,
    Row,
    Name,
    Text,
    Wrap,
    PhoneIcon,
    HomeIcon,
    CalendarIcon,
    Actions,
    UserIcon,
    AbsoluteIcon,
    EditIcon,
    Overflow
} from './style'
import { Button } from '../Buttons'
import Container from '../Container'

class PatientList extends Component {
    render() {
        return (
            <Container transparent>
                <Actions>
                    <Button
                        onClick={() =>
                            this.props.history.push('/patients/addPatient')
                        }
                    >
                        <UserIcon />
                        Add Patient
                    </Button>
                </Actions>
                <Legend>
                    <LegendText>Name</LegendText>
                    <LegendText>Contact</LegendText>
                    <LegendText>Adress</LegendText>
                    <LegendText>Date of brith</LegendText>
                </Legend>
                <Overflow>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => (
                        <Row key={i}>
                            <Wrap>
                                <Name>Marcin Miler</Name>
                            </Wrap>

                            <Wrap>
                                <PhoneIcon />
                                <Text>123-456-789</Text>
                            </Wrap>

                            <Wrap>
                                <HomeIcon />
                                <Text>Somewhere</Text>
                            </Wrap>

                            <Wrap>
                                <CalendarIcon />
                                <Text>11.07.1999</Text>
                            </Wrap>

                            <AbsoluteIcon>
                                <EditIcon />
                            </AbsoluteIcon>
                        </Row>
                    ))}
                </Overflow>
            </Container>
        )
    }
}

export default withRouter(PatientList)
