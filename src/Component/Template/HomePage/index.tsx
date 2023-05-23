import React, { useState } from 'react'
import Sidebar from '../../organism/SideBar'
import LaunchCashKick from '../../organism/LaunchCashKick'
import CashKickTable from '../../organism/HomeTable'
import Navbar from '../../organism/Navbar'
import { styled , Stack } from '@mui/material'
import Greeting from '../../organism/Greeting'
import CashAcclerationPage from '../../Template/CashAcclerationPage'
import NewCashKick from '../NewCashKick'


export const TotalContainer = styled('div')({
  background: 'black',
  border: '1px solid green',

  width: '100vw',
  height: '100vh',

  left: '0px',
  right: '0px',
  top: '0px',
  bottom: '0px',
})

const HomePage = () => {
  const [Cash, setCash] = useState(false)
  const [display, setDisplay] = useState<boolean>(true)




  return (
    <TotalContainer>
      <Navbar />
      {display ? (
        <>
          <Sidebar />

          <Greeting />
          <LaunchCashKick />

          <CashKickTable />
        </>
      ) : (
        <>{Cash ? <NewCashKick /> : <CashAcclerationPage />}</>
      )}
    </TotalContainer>
  )
}

export default HomePage
