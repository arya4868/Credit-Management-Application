import {
  screen,
  fireEvent,
  getByLabelText,
  getByText,
} from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { NewcashKick } from './index'
import '@testing-library/jest-dom/extend-expect'

describe('NewcashKick', () => {
  it('should render modal title and description', () => {
    expect(screen.getByText('Name your cash kick')).toBeInTheDocument()
    expect(
      screen.getByText('Add a name to identify your cash kick')
    ).toBeInTheDocument()
  })

  it('should close modal on clicking close button', () => {
    fireEvent.click(screen.getByText('x'))
    expect(screen.queryByText('Name your cash kick')).not.toBeInTheDocument()
  })

  it('should update input value on change', () => {
    const input = screen.getByLabelText(' Cash kick name')
    fireEvent.change(input, { target: { value: 'New cash kick' } })
    expect(input).toHaveValue('New cash kick')
  })

  it('should navigate to the next page on clicking create cash kick button', () => {
    const input = screen.getByLabelText('Cash kick name')
    fireEvent.change(input, { target: { value: 'New cash kick' } })
    fireEvent.click(screen.getByText('Create cash kick'))
    expect(screen.getByText('Cash Kick Summary')).toBeInTheDocument()
  })

  it('should navigate to the previous page on clicking cancel button', () => {
    fireEvent.click(screen.getByText('Cancel'))
    expect(screen.queryByText('Name your cash kick')).not.toBeInTheDocument()
  })
})
