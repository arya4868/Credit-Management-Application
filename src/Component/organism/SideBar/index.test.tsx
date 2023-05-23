import { render, screen } from '@testing-library/react'
import Sidebar from './index'

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(() => ({
    pathname: '/mock/path',
  })),
}))

describe('Sidebar', () => {
  it('renders the Seeder_Logo component', () => {
    render(<Sidebar />)
    const logoElement = screen.getByTestId('seeder-logo')
    expect(logoElement).toBeInTheDocument()
  })

  it('renders the Home_Button component', () => {
    render(<Sidebar />)
    const homeButtonElement = screen.getByTestId('home-button')
    expect(homeButtonElement).toBeInTheDocument()
  })
})
