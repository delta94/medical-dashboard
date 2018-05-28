import styled from 'styled-components'

export const StyledButton = styled.div`
    width: 170px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 2px solid #ebeef3;
    background-color: #f4f9fa;
    font-weight: 500;
    font-size: 14px;
    color: black;
    cursor: pointer;
`
export const StyledButtonGradient = StyledButton.extend`
    color: white;
    border: none;
    background: linear-gradient(to right, #61bef8, #65e5dc);
`