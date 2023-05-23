import MuiTypography from '../../atoms/Typography'
import { Divider, styled } from '@mui/material'
import {
  DividerAtomStyle,
  GroupStyle,
  PayBackStyle,
  PayOutStyle,
  RateStyle,
  RateTextStyle,
} from '../../../StyleComponent'
import theme from '../../../../Themes'
export interface SummaryPaymentProps {
  TotalPayAmount?: number
  PayBackAmt?: number
  RateAmount: number
}

const SummaryPayment = (props: SummaryPaymentProps) => {
  return (
    <GroupStyle>
      <PayBackStyle>
        <MuiTypography color={theme.colors.DarkTextColor} variant="body1">
          Pay back amount
        </MuiTypography>
        <MuiTypography color={theme.colors.TextColor} variant="body1">
          $ {props.PayBackAmt}
        </MuiTypography>
      </PayBackStyle>

      <RateStyle>
        <MuiTypography color={theme.colors.DarkTextColor} variant="body1">
          Rate%
        </MuiTypography>
        <RateTextStyle>
          <MuiTypography color={theme.colors.DarkTextColor} variant="caption">
            (12.00%)
          </MuiTypography>
          <MuiTypography color={theme.colors.TextColor} variant="body1">
            $ {props.RateAmount}
          </MuiTypography>
        </RateTextStyle>
      </RateStyle>

      <DividerAtomStyle>
        <Divider
          style={{ border: theme.colors.DividerBorder }}
          variant="fullWidth"
        ></Divider>
      </DividerAtomStyle>

      <PayOutStyle data-testid="TotalAmountId">
        <MuiTypography color={theme.colors.DarkTextColor} variant="h3">
          Total Payout
        </MuiTypography>

        <MuiTypography color={theme.colors.TextColor} variant="h3">
          $ {props.TotalPayAmount}
        </MuiTypography>
      </PayOutStyle>
    </GroupStyle>
  )
}

export default SummaryPayment
