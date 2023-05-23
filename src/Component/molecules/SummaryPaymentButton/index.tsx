import React from 'react'
import Button from '../../atoms/Button'
import MuiTypography from '../../atoms/Typography'
import theme from '../../../../Themes'
import { ReviewButtonStyle } from '../../../StyleComponent'

interface PaymentButtonProps {
  onClick: any
  buttontext: string
  TotalPayAmount?: number
  paybackamount?: number
  selectedRows?: number[]
}

const SummaryPaymentButton = (props: PaymentButtonProps) => {
  return (
    <ReviewButtonStyle
      data-testid="SummarypaymentButtonId"
      onClick={props.onClick}
      style={{
        background: theme.colors.ReviewButtonBackground,
        cursor: 'pointer',
      }}
    >
      <MuiTypography color={theme.colors.TextColor} variant="button">
        {props.buttontext}
      </MuiTypography>
    </ReviewButtonStyle>
  )
}

export default SummaryPaymentButton
