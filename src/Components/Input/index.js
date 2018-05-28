import React from 'react'
import { Container, Left, Right, TextInput } from './style'

const Input = ({ name, onChange }) => (
    <Container>
        <Left>{name}</Left>
        <Right>
            <TextInput onChange={e => onChange(e.target.value)} />
        </Right>
    </Container>
)

export default Input
