import { render, screen, fireEvent } from '@testing-library/react'
import HomePage from './index'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router'
import Navbar from '../../organism/Navbar'
import Greeting from '../../organism/Greeting'
import LaunchCashKick from '../../organism/LaunchCashKick'
import CashKickTable from '../../molecules/HomeTable'

describe('HomePage', () => {
  test('renders HomePage component', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
  })
  test('renders HomePage Navbar', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
  })

  test('renders HomePage Greetings', () => {
    render(
      <MemoryRouter>
        <Greeting />
      </MemoryRouter>
    )
  })
  test('renders HomePage LanchCashKick', () => {
    render(
      <MemoryRouter>
        <LaunchCashKick />
      </MemoryRouter>
    )
  })
  test('renders HomePage CashKickTable', () => {
    render(
      <MemoryRouter>
        <CashKickTable />
      </MemoryRouter>
    )
  })
})
