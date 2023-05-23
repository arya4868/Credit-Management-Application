import React from 'react'
import { render } from '@testing-library/react'
import { styled } from '@mui/material'
import GreetingMolecule from '../../molecules/GreetingMolecule'
import Greeting from './index'
import '@testing-library/jest-dom'

const StyledGreeting = styled('div')({
  position: 'absolute',
  left: '280px',
  right: '0px',
  top: '80px',
  bottom: '0px',
  height: '240px',
})

describe('Greeting', () => {
  it('should render the Greeting_Molecule component', () => {
    const { getByTestId } = render(<Greeting />)
    const greetingMolecule = getByTestId('greeting-molecule')
    expect(greetingMolecule).toBeInTheDocument()
  })

  it('should have the correct styles applied', () => {
    const { container } = render(<Greeting />)
    const greetingContainer = container.firstChild
    expect(greetingContainer).toHaveStyleRule('position', 'absolute')
    expect(greetingContainer).toHaveStyleRule('left', '280px')
    expect(greetingContainer).toHaveStyleRule('right', '0px')
    expect(greetingContainer).toHaveStyleRule('top', '80px')
    expect(greetingContainer).toHaveStyleRule('bottom', '0px')
    expect(greetingContainer).toHaveStyleRule('height', '240px')
  })
})
