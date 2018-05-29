import styled from 'styled-components'

const Container = styled.div`
    width: 1500px;
    margin: 120px auto 50px auto;
    padding: ${props => (props.padding ? '40px' : '0')};
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: ${props => (props.transparent ? 'none' : '1px solid #ededed;')};
    background-color: ${props => (props.transparent ? 'transparent' : 'white')};
`

export default Container
