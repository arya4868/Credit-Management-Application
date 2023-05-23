import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeadingMolecule from '../../molecules/HeadingMolecule'
import Term from '../../molecules/SummaryTerm'
import SliderChange from '../../molecules/SliderChanger'
import SummaryPayment from '../../molecules/SummaryPayment'
import SummaryPaymentButton from '../../molecules/SummaryPaymentButton'
import { PriceCardStyled } from '../../../StyleComponent'


interface SummaryProps {
  Selected_Row: number[]
  HandleResetBtn: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  amountSelected: number
  TotalPayAmount: number
  PayBackAmt: number
  RateAmount: number
  Slidervalue: number
  HandleSliderChange: (event: Event, newValue: number | number[]) => void
}

const Summary = (props: SummaryProps) => {
  const navigate = useNavigate()
  const ButtonCall = () => {
    navigate('/reviewcashkick', {
      state: {
        selectedRow: props.Selected_Row,
        paybackamount: props.PayBackAmt,
        totalpayamount: props.TotalPayAmount,
        rateamount: props.RateAmount,
      },
    })
  }

  return (
    <PriceCardStyled data-testid="amount-selected">
      <HeadingMolecule text="Summary" />
      <Term Selected_Row={props.Selected_Row} />
      <SliderChange
        onHandleResetBtn={props.HandleResetBtn}
        amountSelected={props.amountSelected}
        SliderValue={props.Slidervalue}
        onHandleChange={props.HandleSliderChange}
      />
      <SummaryPayment
        PayBackAmt={props.PayBackAmt}
        TotalPayAmount={props.TotalPayAmount}
        RateAmount={props.RateAmount}
      />

      <SummaryPaymentButton
        buttontext="Review Your Credits"
        onClick={ButtonCall}
        TotalPayAmount={props.TotalPayAmount}
        paybackamount={props.PayBackAmt}
      />
    </PriceCardStyled>
  )
}

export default Summary
