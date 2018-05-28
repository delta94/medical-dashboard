import styled from 'styled-components'
import Phone from 'react-icons/lib/md/phone-iphone'
import Home from 'react-icons/lib/fa/home'
import Calendar from 'react-icons/lib/fa/calendar'
import User from 'react-icons/lib/fa/user-plus'
import Edit from 'react-icons/lib/fa/edit'

export const Container = styled.div`
    margin: 0 auto 0 auto;
    padding: 70px 0 0 0;
    width: 1500px;
`
export const Actions = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`
export const Legend = styled.div`
    width: 100%;
    height: 60px;
    margin: 40px 0 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #ededed;
`
export const LegendText = styled.p`
    width: 25%;
    margin: 0 40px 0 40px;
    font-weight: 500;
    font-size: 14px;
    color: #51ddd3;
`
export const Overflow = styled.div`
    overflow: scroll'
`
export const Row = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #ededed;
`
export const Wrap = styled.div`
    width: 25%;
    margin: 0 40px 0 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Name = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: black;
`
export const Text = Name.extend`
    margin-left: 10px;
    font-size: 14px;
`
export const AbsoluteIcon = styled.div`
    height: 100%;
    padding: 0 20px 0 20px;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    cursor: pointer;
    transition: color 200ms ease-in;
    color: #dbdbdb;

    &: hover {
        color: black;
    }
`
export const PhoneIcon = styled(Phone)`
    color: #dbdbdb;
    font-size: 18px;
`
export const HomeIcon = styled(Home)`
    color: #dbdbdb;
    font-size: 18px;
`
export const CalendarIcon = styled(Calendar)`
    color: #dbdbdb;
    font-size: 18px;
`
export const UserIcon = styled(User)`
    margin-right: 10px;
    color: #dbdbdb;
    font-size: 22px;
`
export const EditIcon = styled(Edit)`
    font-size: 22px;
`
