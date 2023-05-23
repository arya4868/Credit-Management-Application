import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from './index'
import '@testing-library/jest-dom'

describe('Navbar component', () => {
  it('renders without errors', () => {
    render(<Navbar />)
  })

  it('renders NavContent component with correct props', () => {
    const { getByText } = render(<Navbar />)
    const greeting = getByText(/Good/i)
    const desc = getByText(/\d{1,2}\/\d{1,2}\/\d{4}/)
    expect(greeting).toBeInTheDocument()
    expect(desc).toBeInTheDocument()
  })
  jest.mock('./index', () => ({
    __esModule: true,
    default: jest.fn(() => <div>Mock Navbar</div>),
  }))

  jest.mock('../../molecules/NavContent', () => ({
    __esModule: true,
    default: jest.fn(() => <div>Mock NavContent</div>),
  }))

  describe('Navbar component', () => {
    beforeEach(() => {
      jest
        .spyOn(Date.prototype, 'toLocaleString')
        .mockReturnValue('4/18/2023, 7:00:00 PM')
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10) // set time to morning
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('renders with correct title and description', () => {
      render(<Navbar />)
      const title = screen.getByText('Good morning')
      const desc = screen.getByText('4/18/2023, 7:00:00 PM')
      expect(title).toBeInTheDocument()
      expect(desc).toBeInTheDocument()
    })
  })
})
