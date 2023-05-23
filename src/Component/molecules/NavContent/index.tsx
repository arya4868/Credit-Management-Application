import React from 'react'
import MuiTypography from '../../atoms/Typography'
import { styled } from '@mui/material'

const StyledNavContent = styled('div')({
  width: '294px',
  height: '42px',

  position: 'absolute',
  left: '28px',
  top: '20px',

  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '36px',
  lineHeight: '42px',
  letterSpacing: '-0.015em',
  color: '#E8E7F0',
  flex: 'none',
  order: '0',
  flexGrow: '0',
})
type props = {
  title: string
  desc: React.ReactNode
}
const NavContent: React.FC<props> = ({ title, desc }) => {
  return (
    <div>
      <StyledNavContent>
        <MuiTypography variant="h2">{title}</MuiTypography>
      </StyledNavContent>
      <StyledNavContent
        style={{
          top: '50px',
          color: '#A5A5A6',
          fontWeight: '500',
          fontSize: '18px',
        }}
      >
        <MuiTypography>{desc}</MuiTypography>
      </StyledNavContent>
    </div>
  )
}

export default NavContent
