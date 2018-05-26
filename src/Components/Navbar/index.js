import React from 'react'
import { withRouter } from 'react-router-dom'
import {
    Container,
    NavItem,
    DashboardIcon,
    PeopleIcon,
    LogoIcon,
    Left,
    Right,
    SettingsIcon,
    NotificationsIcon,
    CalendarIcon,
    PlansIcon,
    DoctorIcon,
    HomeIcon
} from './style'

const Navbar = ({ history }) => (
    <Container>
        <Left>
            <LogoIcon />

            <NavItem onClick={() => history.push('/')}>
                <HomeIcon /> Home
            </NavItem>

            <NavItem>
                <DashboardIcon /> Dashboard
            </NavItem>

            <NavItem>
                <CalendarIcon /> Calendar
            </NavItem>

            <NavItem>
                <PlansIcon /> Plans
            </NavItem>

            <NavItem onClick={() => history.push('/patients')}>
                <PeopleIcon /> Patients
            </NavItem>
            <NavItem>
                <DoctorIcon /> Doctors
            </NavItem>
        </Left>

        <Right>
            <NotificationsIcon />

            <SettingsIcon />
        </Right>
    </Container>
)

export default withRouter(Navbar)
