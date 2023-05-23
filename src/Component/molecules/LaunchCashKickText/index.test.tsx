import { render, getByText } from '@testing-library/react'
import LaunchCashKickText from './index'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router'

describe('Launch_Cash_Kick_Text', () => {
  it('renders the correct text for Launch Cash Kick', () => {
    const { getByText } = render(
      <MemoryRouter>
        <LaunchCashKickText />
      </MemoryRouter>
    )
    expect(getByText('Launch a new Cash Kick')).toBeInTheDocument()
  })

  it('renders the correct text for available cash advance', () => {
    const { getByText } = render(
      <MemoryRouter>
        <LaunchCashKickText />
      </MemoryRouter>
    )
    const expectedValue = 888000
    const expectedText = `You have upto $ ${expectedValue} available for a new cash advance`
    expect(getByText(expectedText)).toBeInTheDocument()
  })
})
