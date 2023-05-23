import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ReportCard from './index'

describe('ReportCard', () => {
  test('renders the report card with the correct information', () => {
    render(<ReportCard />)

    const dueDate = screen.getByText(/due- may 01,2023/i)
    expect(dueDate).toBeInTheDocument()

    const amount = screen.getByText('$15,200.55')
    expect(amount).toBeInTheDocument()

    const tagImage = screen.getByAltText('tag')
    expect(tagImage).toBeInTheDocument()

    const infoCircleImage = screen.getByAltText('infoCircle')
    expect(infoCircleImage).toBeInTheDocument()

    const Receipttext = screen.getByAltText('Receipt text')
    expect(Receipttext).toBeInTheDocument()
  })
})
