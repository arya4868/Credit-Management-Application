import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Summary from './index'
import '@testing-library/jest-dom'

describe('Summary', () => {
  const props = {
    Selected_Row: [1, 2, 3],
    HandleResetBtn: jest.fn(),
    amountSelected: 100,
    TotalPayAmount: 120,
    PayBackAmt: 20,
    RateAmount: 5,
    Slidervalue: 50,
    HandleSliderChange: jest.fn(),
  }

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Summary {...props} />
      </BrowserRouter>
    )
  })

  test('renders the heading', () => {
    expect(screen.getByText('Summary')).toBeInTheDocument()
  })

  test('renders the term with selected row numbers', () => {
    expect(screen.getByText('Selected Rows: 1,2,3')).toBeInTheDocument()
  })

  test('renders the slider with correct props', () => {
    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuenow', '50')
    fireEvent.change(slider, { target: { value: 75 } })
    expect(props.HandleSliderChange).toHaveBeenCalledWith(
      expect.any(Object),
      75
    )
    fireEvent.click(screen.getByText('Reset'))
    expect(props.HandleResetBtn).toHaveBeenCalled()
  })

  test('renders the payment summary with correct props', () => {
    expect(screen.getByText('Total Amount to Pay: $120')).toBeInTheDocument()
    expect(screen.getByText('Pay Back Amount: $20')).toBeInTheDocument()
    expect(screen.getByText('Rate of Interest: 5%')).toBeInTheDocument()
  })

  test('renders the payment button with correct props', () => {
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Review Your Credits')
    fireEvent.click(button)
    expect(window.location.pathname).toBe('/reviewcashkick')
    expect(window.history.state).toEqual({
      selectedRow: [1, 2, 3],
      paybackamount: 20,
      totalpayamount: 120,
      rateamount: 5,
    })
  })
})
