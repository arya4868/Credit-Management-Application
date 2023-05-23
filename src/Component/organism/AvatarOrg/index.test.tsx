import { render } from '@testing-library/react'
import AvatarOrg from './index'
import '@testing-library/jest-dom/extend-expect'


describe('AvatarOrg component', () => {
  test('renders without errors', () => {
    render(<AvatarOrg />)
  })

  test('renders the AvatarMolecule component', () => {
    const { container } = render(<AvatarOrg />)
    expect(container.querySelector('div > div > img')).toBeInTheDocument()
  })
  it('renders the arrow down icon', () => {
    const { getByAltText } = render(<AvatarOrg />)
    const arrowIcon = getByAltText('arrowdown')
    expect(arrowIcon).toBeInTheDocument()
  })
})
