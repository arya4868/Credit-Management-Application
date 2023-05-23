import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import LaunchCashKickButton from './index'
import '@testing-library/jest-dom'

describe('Launch_Cash_Kick_Button', () => {
  test('renders button with correct text', () => {
    render(
      <MemoryRouter>
        <LaunchCashKickButton />
      </MemoryRouter>
    )
    const button = screen.getByText(/New Cash Kick/i)
    expect(button).toBeInTheDocument()
  })

  test('NewCashKick component is not displayed initially', () => {
    render(
      <MemoryRouter>
        <LaunchCashKickButton />
      </MemoryRouter>
    )
    const newCashKick = screen.queryByTestId('new-cash-kick')
    expect(newCashKick).not.toBeInTheDocument()
  })
})
