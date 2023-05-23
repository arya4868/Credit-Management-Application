import { render, screen } from '@testing-library/react'
import NewCashKickNavBar from './index'

describe('NewCashKick_Navbar', () => {
  test('renders with the correct title and description', () => {
    render(<NewCashKickNavBar />)
    expect(screen.getByText('New Cash Kick')).toBeInTheDocument()
    expect(
      screen.getByText('Let’s setup a new cash kick to power your Saas')
    ).toBeInTheDocument()
  })

  test('renders the NewCashKick_BackButton and Avatar_Org components', () => {
    render(<NewCashKickNavBar />)
    expect(screen.getByTestId('new-cash-kick-back-button')).toBeInTheDocument()
    expect(screen.getByTestId('avatar-org')).toBeInTheDocument()
  })

  test('has the correct styles applied', () => {
    render(<NewCashKickNavBar />)
    expect(screen.getByTestId('new-cash-kick-navbar')).toHaveStyle(`
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px 0px 20px;
      gap: 40px;
      position: absolute;
      width: 990px;
      left: 230px;
      height: 100px;
      top: 0px;
      bottom: 600px;
      border-right: 1px solid #222124;
      border-radius: 0px;
    `)
  })
})
