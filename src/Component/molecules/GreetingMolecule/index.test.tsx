import { render } from '@testing-library/react'
import GreetingMolecule from './index'

describe('Greeting_Molecule', () => {
  it('should render the component without errors', () => {
    render(<GreetingMolecule />)
  })
  test('renders the correct image with alt text', () => {
    const { getByAltText } = render(<GreetingMolecule />)
    const image = getByAltText('GreetImg')
  })
})
