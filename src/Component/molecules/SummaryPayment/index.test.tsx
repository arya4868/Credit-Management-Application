import { render, screen } from '@testing-library/react'
import SummaryPayment from './index'
import '@testing-library/jest-dom'

it('should render the pay back amount correctly', () => {
  const props = {
    TotalPayAmount: 50000,
    PayBackAmt: 30000,
    RateAmount: 6000,
  }
  const { getByText } = render(<SummaryPayment {...props} />)
  const payBackAmount = getByText('$ 30000')
  expect(payBackAmount).toBeInTheDocument()
})

// it('should render the rate amount correctly', () => {
//   const props = {
//     TotalPayAmount: 50000,
//     PayBackAmt: 30000,
//     RateAmount: 6000,
//   }
//   const { getByText } = render(<SummaryPayment {...props} />)
//   const rateAmount = getByText('(12%) $ 6000')
//   expect(rateAmount).toBeInTheDocument()
// })

it('should render the total payable amount correctly', () => {
  const props = {
    TotalPayAmount: 50000,
    PayBackAmt: 30000,
    RateAmount: 6000,
  }
  const { getByText } = render(<SummaryPayment {...props} />)
  const totalPayableAmount = getByText('$ 50000')
  expect(totalPayableAmount).toBeInTheDocument()
})
