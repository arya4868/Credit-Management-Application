import Sidebar from '../../organism/SideBar'
import LaunchCashKickG from '../../organism/LanchCashG'
import CashKickTableG from '../../organism/HomeTableG'
import Navbar from '../../organism/Navbar'
import { Stack, styled } from '@mui/material'
import ReportCard from '../../organism/ReportOrg'
import InfoCircle from '../../organism/InfoCircle'

export const TotalContainer = styled('div')({
  background: 'black',
  height: '100vh',
  width: '99.9vw',
})
const HomePage1 = () => {
  return (
    <TotalContainer>
      <Navbar />
      <InfoCircle />

      <ReportCard />

      <Sidebar />
      <LaunchCashKickG />
      <CashKickTableG />
    </TotalContainer>
  )
}

export default HomePage1
