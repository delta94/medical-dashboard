import React from 'react'
import { Container, Left, Right, TextInput } from './style'

const Input = ({ name, onChange }) => (
    <Container>
        <Left>{name}</Left>
        <Right>
            <TextInput
                onChange={e => (onChange ? onChange(e.target.value) : null)}
            />
        </Right>
    </Container>
)

export default Input
