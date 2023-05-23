import React from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material'

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  variant = 'contained',
  disabled = false,
  sx,
  size = 'medium',
  startIcon,
  onClick,
}) => {
  return (
    <MuiButton
      color={color}
      variant={variant}
      disabled={disabled}
      size={size}
      sx={sx}
      onClick={onClick}
      startIcon={startIcon}
    >
      {children}
    </MuiButton>
  )
}

export default Button
