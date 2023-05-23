import CashKickTable from '../../molecules/HomeTable'
import { MuiTableStyle } from '../../../StyleComponent'

const HomeTable = () => {
  return (
    <MuiTableStyle style={{ width: '74vw', top: '50%', height: '50vh' }}>
      <CashKickTable />
    </MuiTableStyle>
  )
}

export default HomeTable
