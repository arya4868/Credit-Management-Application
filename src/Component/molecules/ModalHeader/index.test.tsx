import React from 'react'
import { render, screen } from '@testing-library/react'
import { ModalHeader } from './index'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

describe('ModalHeader', () => {
  it('should render the title and description', () => {
    render(<ModalHeader title="saiprabhu" description="vikram" />)
    expect(screen.getByText('saiprabhu')).toBeInTheDocument()
    expect(screen.getByText('vikram')).toBeInTheDocument()
  })

  // it('should render the title in h5 tag and description in body1 tag', () => {
  //   render(<ModalHeader title="bootcamp-b2" description="zemoso" />)
  //   expect(screen.getByText('bootcamp-b2').tagName).toEqual('H5')
  //   expect(screen.getByText('zemoso').tagName).toEqual('P')
  // })

  it('should render the title and description correctly', () => {
    render(<ModalHeader title="Test Title" description="Test Description" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  // it('should apply the correct font weights to the title and description', () => {
  //   render(<ModalHeader title="Test Title" description="Test Description" />)
  //   const titleElement = screen.getByText('Test Title')
  //   const descriptionElement = screen.getByText('Test Description')
  //   expect(titleElement).toHaveStyle('font-weight: 300;')
  //   expect(descriptionElement).toHaveStyle('font-weight: 300;')
  // })
})
