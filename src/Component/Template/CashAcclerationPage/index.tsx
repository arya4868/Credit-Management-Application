import { TotalContainer } from '../HomePage'
import Sidebar from '../../organism/SideBar'
import LaunchCashKick from '../../organism/LaunchCashKick'
import CashAcclerationCard from '../../organism/CashAcclerationCard'
import CashAcclerationTable from '../../organism/CashAcclerationTable'
import { Outlet, useLocation } from 'react-router-dom'
import Heading from '../../molecules/TableNavBar'

interface CashAccelerationPageProps {
  handleCash?: any
  handleHome?: any
  handleAcce?: () => void
}

const CashAcclerationPage = (props: CashAccelerationPageProps) => {
  return (
    <>
      <TotalContainer>
        <Heading
          title="Cash accleration"
          desc="Place to create new cash kicks to run your business"
        />

        <Sidebar />

        <LaunchCashKick />
        <CashAcclerationCard />

        <CashAcclerationTable />
      </TotalContainer>
      <Outlet />
    </>
  )
}

export default CashAcclerationPage
