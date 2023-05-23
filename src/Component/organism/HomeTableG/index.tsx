import CashKickTableG from '../../molecules/HomeTableG'
import { MuiTableStyle } from '../../../StyleComponent'
import HeadingMolecule from '../../molecules/HeadingMolecule'

const HomeTableG = () => {
  return (
    <MuiTableStyle style={{ width: '74vw', top: '50%', height: '50vh' }}>
      <HeadingMolecule text="Your payments"></HeadingMolecule>
      <CashKickTableG />
    </MuiTableStyle>
  )
}

export default HomeTableG
