import { render, getByRole, getByTestId } from '@testing-library/react'
import AvatarMolecule from './index'
import avatar from '../../../../public/Asset/Images/avatar+icon.svg'
import '@testing-library/jest-dom/extend-expect'

test('renders avatar molecule', () => {
  render(<AvatarMolecule />)
})

// test('AvatarMolecule component shows loading spinner or placeholder until the image is loaded', () => {
//   const { getByTestId } = render(<AvatarMolecule />)
//   expect(getByTestId('avatar-spinner')).toBeInTheDocument()
//   expect(getByTestId('avatar-image')).not.toBeInTheDocument()
// })
