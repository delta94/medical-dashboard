import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #f2f1f6;
`
export const Left = styled.div`
    width: 100px;
    height: 50%;
    padding-left: 20px;
    display: flex;
    align-items: center;
    border-right: 1px solid #f2f1f6;
    font-size: 14px;
    color: gray;
`
export const Right = styled.div`
    flex-grow: 1;
    padding: 20px;
`
export const TextInput = styled.input`
    width: 100%;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: black;

    &:focus {
        outline: none;
    }
`
