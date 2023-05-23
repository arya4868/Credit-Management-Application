import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter, Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import LaunchCashKickButton from './index'
import { createMemoryHistory } from 'history'

describe('LaunchCashKickButton', () => {
  it('should render a "New Cash Kick" button', () => {
    const { getByRole } = render(<LaunchCashKickButton />, {
      wrapper: MemoryRouter,
    })
    const buttonElement = getByRole('button', { name: /new cash kick/i })
    expect(buttonElement).toBeInTheDocument()
  })

  it('should navigate to "/NewCashKick" when "New Cash Kick" button is clicked', () => {
    const history = createMemoryHistory()
    const { getByRole } = render(
      <MemoryRouter>
        <LaunchCashKickButton />
      </MemoryRouter>
    )
    const buttonElement = getByRole('button', { name: 'New Cash Kick' })
    fireEvent.click(buttonElement)
    expect(history.location.pathname).toBe('/')
  })
})
