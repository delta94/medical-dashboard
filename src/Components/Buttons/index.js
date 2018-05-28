import React from 'react'
import { StyledButton, StyledButtonGradient } from './style'

export const Button = ({ children, ...props }) => (
    <StyledButton {...props}>{children}</StyledButton>
)

export const GradientButton = ({ children }) => (
    <StyledButtonGradient>{children}</StyledButtonGradient>
)
