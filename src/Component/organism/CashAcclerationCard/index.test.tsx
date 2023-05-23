import { render } from '@testing-library/react'
import CashAccelerationCard from './index'
import '@testing-library/jest-dom/extend-expect'

describe('CashAccelerationCard', () => {
  it('renders without errors', () => {
    render(<CashAccelerationCard />)
  })
})
describe('CashAccelerationCard', () => {
  it('renders CardAccelerationMolecule components with correct props', () => {
    const { getByText, getByAltText } = render(<CashAccelerationCard />)
    const termCapText = getByText('Term cap')
    const termCapValue = getByText('12 Months')
    expect(termCapText).toBeInTheDocument()
    expect(termCapValue).toBeInTheDocument()
    const availableCreditText = getByText('Available credit')
    const availableCreditValue = getByText('$880.0k')
    expect(availableCreditText).toBeInTheDocument()
    expect(availableCreditValue).toBeInTheDocument()
    const maxInterestRateText = getByText('Max interest rate')
    const maxInterestRateValue = getByText('12.00%')
    expect(maxInterestRateText).toBeInTheDocument()
    expect(maxInterestRateValue).toBeInTheDocument()
  })
})
