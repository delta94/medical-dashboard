import styled from 'styled-components'

import Logo from 'react-icons/lib/fa/google'
import Home from 'react-icons/lib/fa/home'
import Dashboard from 'react-icons/lib/md/dashboard'
import Calenadar from 'react-icons/lib/fa/calendar'
import Plans from 'react-icons/lib/fa/table'
import People from 'react-icons/lib/md/people'
import Doctor from 'react-icons/lib/fa/user-md'
import Notifications from 'react-icons/lib/md/notifications'
import Settings from 'react-icons/lib/fa/bars'

const gray = '#dbdbdb'

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    box-shadow: 5px 5px 15px lightgray;
`
export const Left = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Right = styled(Left)``
export const LogoIcon = styled(Logo)`
    padding: 0 40px 0 40px;
    font-size: 42px;
    color: #51ddd3;
`
export const NavItem = styled.div`
    height: 100%;
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #ededed;
    font-weight: 500;
    font-size: 14px;
    color: #2b2b2b;
    cursor: pointer;
    transition: background 200ms ease-in;

    &:hover {
        background-color: #f7f7f7;
    }
`
export const HomeIcon = styled(Home)`
    padding-right: 10px;
    font-size: 28px;
    color: ${props => (props.active ? '#51ddd3' : '#dbdbdb')};
`
export const DashboardIcon = styled(Dashboard)`
    padding-right: 10px;
    font-size: 28px;
    color: ${gray};
`
export const CalendarIcon = styled(Calenadar)`
    padding-right: 10px;
    font-size: 28px;
    color: ${gray};
`
export const PlansIcon = styled(Plans)`
    padding-right: 10px;
    font-size: 28px;
    color: ${gray};
`
export const PeopleIcon = styled(People)`
    padding-right: 10px;
    font-size: 28px;
    color: ${gray};
`
export const DoctorIcon = styled(Doctor)`
    padding-right: 10px;
    font-size: 28px;
    color: ${gray};
`
export const SettingsIcon = styled(Settings)`
    padding: 0 25px 0 25px;
    font-size: 28px;
    color: gray;
`
export const NotificationsIcon = styled(Notifications)`
    height: 100%;
    padding: 0 25px 0 25px;
    font-size: 28px;
    color: ${gray};
    border-right: 1px solid #ededed;
`
