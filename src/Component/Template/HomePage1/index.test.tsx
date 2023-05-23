import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router'
import HomePage1 from './index'
import LaunchCashKickG from '../../organism/LanchCashG'
import CashKickTableG from '../../molecules/HomeTableG'
import ReportCard from '../../organism/ReportOrg'
describe('HomePage', () => {
  test('renders HomePage1 components in the page', () => {
    render(
      <MemoryRouter>
        <HomePage1 />
      </MemoryRouter>
    )
  })
  test('renders HomePage1 components in the page', () => {
    render(
      <MemoryRouter>
        <CashKickTableG />
      </MemoryRouter>
    )
  })
  test('renders HomePage1 components in the page', () => {
    render(
      <MemoryRouter>
        <LaunchCashKickG />
      </MemoryRouter>
    )
  })
  test('renders HomePage1 components in the page', () => {
    render(
      <MemoryRouter>
        <ReportCard />
      </MemoryRouter>
    )
  })
})
