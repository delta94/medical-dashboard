import styled from 'styled-components'

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`
export const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`
export const Right = Left.extend`
    margin-left: 40px;
`
export const Actions = styled.div`
    width: 360px;
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
