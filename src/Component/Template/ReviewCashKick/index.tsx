import Sidebar from '../../organism/SideBar'
import ReviewTable from '../../organism/ReviewTable'

import ReviewSummary from '../../organism/ReviewSummary'
import { useLocation } from 'react-router-dom'
import { tableData } from '../../../../data/TableData'
import { MuiTableStyle, TotalContainerStyle } from '../../../StyleComponent'
import NewCashKickNavBar from '../../organism/NewCashKickNavBar'
import HeadingMolecule from '../../molecules/HeadingMolecule'


const ReviewCashKick = () => {
  const location = useLocation()
  const selectedRow = location.state?.selectedRow
  const paybackamount = location.state?.paybackamount

  const totalpayamount = location.state?.totalpayamount
  const rateamount = location.state?.rateamount
  const selectedRowData = tableData.filter((item: any) => {
    return selectedRow?.includes(item.id)
  })
 
  

    return (
    <div>
      <TotalContainerStyle>
        <Sidebar />
        <NewCashKickNavBar />
        <MuiTableStyle style={{ height: '40vh' }}>
          <HeadingMolecule text="Selected Contracts"></HeadingMolecule>
          <ReviewTable selectedData={selectedRowData} />
        </MuiTableStyle>
        <ReviewSummary
          Selected_Row={selectedRow?.length}
          amountSelected={totalpayamount}
          PayBackAmt={paybackamount}
          TotalPayAmount={totalpayamount}
          RateAmount={rateamount}
        />
      </TotalContainerStyle>
    </div>
  )
}

export default ReviewCashKick
