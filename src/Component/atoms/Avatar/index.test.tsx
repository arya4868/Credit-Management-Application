import { render, screen } from '@testing-library/react'
import MuiAvatar from './index'
import '@testing-library/jest-dom'

describe('MuiAvatar', () => {
  it('renders the Avatar component with the correct image', () => {
    render(<MuiAvatar src="../Asset/Icon/SeederLogo.svg" />)
    const avatarImage = screen.getByRole('img')
    expect(avatarImage).toHaveAttribute('src', '../Asset/Icon/SeederLogo.svg')
  })

  it('renders the Avatar with correct style', () => {
    render(
      <MuiAvatar
        src="../Asset/Icon/SeederLogo.svg"
        style={{
          backgroundColor: '#FF0000',
          color: '#FFFFFF',
          fontSize: '16px',
        }}
        data-testid="PersonIcon"
      />
    )
    const chip = screen.getByTestId('PersonIcon')
    expect(chip).toHaveStyle('background-color: #FF0000')
    expect(chip).toHaveStyle('color: #FFFFFF')
    expect(chip).toHaveStyle('font-size: 16px')
  })
})
