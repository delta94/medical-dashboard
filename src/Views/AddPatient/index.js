import React, { Component } from 'react'

import Fullscreen from '../../Components/Fullscreen'
import Container from '../../Components/Container'
import Title from '../../Components/Title'
import Subtitle from '../../Components/Subtitle'
import Input from '../../Components/Input'
import { Button, GradientButton } from '../../Components/Buttons'
import { Row, Left, Right, Actions } from './style'

class AddPatient extends Component {
    render() {
        return (
            <Fullscreen>
                <Container padding>
                    <Title>Add New Patient</Title>

                    <Subtitle>Basic inforamtions</Subtitle>

                    <Row>
                        <Left>
                            <Input name="Firstname" />

                            <Input name="Date of Birth" />
                        </Left>

                        <Right>
                            <Input name="Contact" />

                            <Input name="Adress" />
                        </Right>
                    </Row>

                    <Subtitle>Additional inforamtions</Subtitle>

                    <Row>
                        <Left>
                            <Input name="Street" />

                            <Input name="Town" />

                            <Input name="Postal Code" />

                            <Input name="Middle Name" />

                            <Input name="Malden Surname" />
                        </Left>

                        <Right>
                            <Input name="House Number" />

                            <Input name="Country" />

                            <Input name="Country / State" />

                            <Input name="Fathers Name" />

                            <Input name="Birth Place" />
                        </Right>
                    </Row>

                    <Actions>
                        <Button>Cancel</Button>
                        <GradientButton>Save</GradientButton>
                    </Actions>
                </Container>
            </Fullscreen>
        )
    }
}

export default AddPatient
