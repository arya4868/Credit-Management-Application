import React from 'react'
import { render } from '@testing-library/react'
import HomeTableG from './index'
import '@testing-library/jest-dom/extend-expect'

describe('HomeTableG', () => {
  it('should render table with heading', () => {
    const { getByText } = render(<HomeTableG />)

    expect(getByText('Your payments')).toBeInTheDocument()
    expect(getByText('Due Date')).toBeInTheDocument()
    expect(getByText('Status')).toBeInTheDocument()
    expect(getByText('Expected Amount')).toBeInTheDocument()
    expect(getByText('Outstanding')).toBeInTheDocument()
  })
})
