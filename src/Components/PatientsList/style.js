import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto 0 auto;
    padding: 70px 0 0 0;
    width: 1500px;
`
export const Legend = styled.div`
    width: 100%;
    height: 60px;
    margin: 40px 0 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #ededed;
`
export const LegendText = styled.p`
    width: 25%;
    margin: 0 20px 0 20px;
    font-weight: 500;
    font-size: 14px;
    color: #51ddd3;
`
export const Row = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #ededed;
`
export const Name = styled.p`
    width: 25%;
    margin: 0 20px 0 20px;
    font-weight: 500;
    font-size: 16px;
    color: black;
`
export const Text = Name.extend`
    font-size: 14px;
`
