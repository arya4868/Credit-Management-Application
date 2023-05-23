import React from 'react'
import { StyledButton } from '../../../StyleComponent'

type props = {
  text: string
  onClick: () => void
}

export const ButtonCashAccleration: React.FC<props> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

