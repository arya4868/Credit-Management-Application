import { render, screen, fireEvent } from '@testing-library/react'
import CashAcclerationPage from './index'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router'
import Sidebar from '../../organism/SideBar'
import LaunchCashKick from '../../organism/LaunchCashKick'
import CashAcclerationCard from '../../organism/CashAcclerationCard'
import CashAcclerationTable from '../../organism/CashAcclerationTable'

describe('HomePage', () => {
  test('renders HomePage component', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    )
  })
  test('renders HomePage Navbar', () => {
    render(
      <MemoryRouter>
        <LaunchCashKick />
      </MemoryRouter>
    )
  })

  test('renders HomePage Greetings', () => {
    render(
      <MemoryRouter>
        <CashAcclerationCard />
      </MemoryRouter>
    )
  })
  test('renders HomePage LanchCashKick', () => {
    render(
      <MemoryRouter>
        <CashAcclerationTable />
      </MemoryRouter>
    )
  })
})
