import React from 'react'
import MuiTypography from '../../atoms/Typography'
import { styled } from '@mui/material/styles'
import {
  CashKickTextStyled,
  LaunchCashKickTextStyled,
} from '../../../StyleComponent'
import theme from '../../../../Themes'
import { useLocation } from 'react-router'

const LaunchCashKickText = () => {
  const location = useLocation()
  const totalpayamount = location.state?.totalpayamount
  let value: number

  if (totalpayamount === undefined) {
    value = 888000
  } else {
    value = 888000 - totalpayamount
  }

  return (
    <LaunchCashKickTextStyled>
      <CashKickTextStyled>
        <MuiTypography variant="h2">Launch a new Cash Kick</MuiTypography>
      </CashKickTextStyled>

      <MuiTypography color={theme.colors.DarkTextColor} variant="body1">
        {` You have upto $ ${value} available for a new cash advance`}
      </MuiTypography>
    </LaunchCashKickTextStyled>
  )
}

export default LaunchCashKickText
