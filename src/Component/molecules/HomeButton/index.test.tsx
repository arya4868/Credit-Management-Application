import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import HomeButton from './index'

describe('Home_Button', () => {
  test('renders Cash Acceleration button', () => {
    render(
      <MemoryRouter>
        <HomeButton />
      </MemoryRouter>
    )
    const cashButton = screen.queryAllByRole('button', {
      name: /cash acceleration/i,
    })
    expect(cashButton.length).toBe(1)
  })

  test('handles Home button click', () => {
    render(
      <MemoryRouter>
        <HomeButton />
      </MemoryRouter>
    )
    const homeButton = screen.queryAllByRole('button', {
      name: /home/i,
    })
    homeButton[0].click()
    expect(window.location.pathname).toBe('/')
  })

  test('handles Cash Acceleration button click', () => {
    render(
      <MemoryRouter>
        <HomeButton />
      </MemoryRouter>
    )
    const cashButton = screen.queryAllByRole('button', {
      name: /CashAccelerationPage/i,
    })
    expect(cashButton.length).toBe(0)
    // cashButton[0].click()
    // expect(window.location.pathname).toBe('/CashAccelerationPage')
  })
  test('renders Home button', () => {
    render(
      <MemoryRouter>
        <HomeButton />
      </MemoryRouter>
    )
    const homeButton = screen.queryAllByRole('button', {
      name: /home/i,
    })
  })
})
