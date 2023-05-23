import HeadingMolecule from '../../molecules/HeadingMolecule'
import Term from '../../molecules/SummaryTerm'
import SummaryPayment from '../../molecules/SummaryPayment'
import SummaryPaymentButton from '../../molecules/SummaryPaymentButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { PriceCardStyled } from '../../../StyleComponent'
interface SummaryProps {
  Selected_Row?: any
  amountSelected?: any
  TotalPayAmount?: any
  PayBackAmt?: any
  RateAmount?: any
}

const ReviewSummary = (props: SummaryProps) => {
  const location = useLocation()
  const selectedRow = location.state?.selectedRow

  const navigate = useNavigate()
  const ButtonCall = () => {
    navigate('/newcashmodel', {
      state: {
        selectedRow: selectedRow,
        paybackamount: props.PayBackAmt,
        totalpayamount: props.TotalPayAmount,
        rateamount: props.RateAmount,
      },
    })
  }
 

  return (
    <PriceCardStyled style={{ height: '46vh' }}>
      <HeadingMolecule text="Summary" />
      <Term Selected_Row={props.Selected_Row} />
      <SummaryPayment
        PayBackAmt={props.PayBackAmt}
        TotalPayAmount={props.TotalPayAmount}
        RateAmount={props.RateAmount}
      />
      <SummaryPaymentButton
        buttontext="Submit Your Credit"
        onClick={ButtonCall}
        TotalPayAmount={props.TotalPayAmount}
        paybackamount={props.PayBackAmt}
      />
    </PriceCardStyled>
  )
}

export default ReviewSummary
