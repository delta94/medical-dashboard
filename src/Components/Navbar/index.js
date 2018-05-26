import React from 'react'
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
    DoctorIcon
} from './style'

const Navbar = () => (
    <Container>
        <Left>
            <LogoIcon />
            <NavItem>
                <DashboardIcon /> Dashboard
            </NavItem>

            <NavItem>
                <CalendarIcon /> Calendar
            </NavItem>

            <NavItem>
                <PlansIcon /> Plans
            </NavItem>

            <NavItem>
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

export default Navbar
