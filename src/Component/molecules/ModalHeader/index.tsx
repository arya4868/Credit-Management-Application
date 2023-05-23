import React, { FC } from 'react'
import Typography from '../../atoms/Typography'
import theme from '../../../../Themes'
import { ModalHeaderStyle } from '../../../StyleComponent'

interface MyHeaderProps {
  title: string
  description: string
}


export const ModalHeader: FC<MyHeaderProps> = ({ title, description }) => {
  return (
    <ModalHeaderStyle>
      <Typography color={theme.colors.TextColor} variant="h1">
        {title}
      </Typography>

      <Typography color={theme.colors.DarkTextColor} variant="h3">
        {description}
      </Typography>
    </ModalHeaderStyle>
  )
}
