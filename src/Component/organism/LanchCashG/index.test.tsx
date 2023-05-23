import { render, fireEvent } from '@testing-library/react'
import LaunchCashKickG from './index'

describe('LaunchCashKickG component', () => {
  it('renders LaunchCashKickText and LaunchCashKickButton', () => {
    const { getByTestId } = render(<LaunchCashKickG />)
    expect(getByTestId('launch-cash-kick-text')).toBeInTheDocument()
    expect(getByTestId('launch-cash-kick-button')).toBeInTheDocument()
  })
})
