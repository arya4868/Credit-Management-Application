import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Term from './index'

describe('Term component', () => {
  it('should render the term label', () => {
    render(<Term Selected_Row={[]} />)
    const termLabel = screen.getByText('Term')
    expect(termLabel).toBeInTheDocument()
  })

  it('should render the term value', () => {
    render(<Term Selected_Row={[]} />)
    const termValue = screen.getByText('12months')
    expect(termValue).toBeInTheDocument()
  })

  it('should render the selected contracts label', () => {
    render(<Term Selected_Row={[1, 2, 3]} />)
    const selectedContractsLabel = screen.getByText('Selected Contracts')
    expect(selectedContractsLabel).toBeInTheDocument()
  })

  it('should render the number of selected contracts', () => {
    render(<Term Selected_Row={[1, 2, 3]} />)
    const selectedContractsValue = screen.getByText('3')
    expect(selectedContractsValue).toBeInTheDocument()
  })
})
