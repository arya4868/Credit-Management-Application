import CashAcclerationPage from '../Template/CashAcclerationPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NewCashKick from '../Template/NewCashKick'

import HomePage from '../Template/HomePage'
import HomePage1 from '../Template/HomePage1'
import Cashkicklanch from '../organism/CashKickLanch'
import ReviewCashKick from '../Template/ReviewCashKick'
import { NewcashKick } from '../organism/NewCashKick'

const Page = () => {
  return (
    <div>
     

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      
        <Route path="NewcashKick" element={<NewcashKick />} />
        <Route path="/NewCashKick1" element={<NewCashKick />} />
        <Route
          path="/CashAccelerationPage"
          element={<CashAcclerationPage />}
        ></Route>
        <Route
          path="CashAccelerationPage/NewCashKick1"
          element={<NewCashKick />}
        />
        <Route
          path="/CashKickModal/CashAccelerationPage"
          element={<CashAcclerationPage />}
        />
        <Route path="Cashkicklanch" element={<Cashkicklanch />} />
        <Route path="/HomePage1" element={<HomePage1 />} />
        <Route path="Cashkicklanch/HomePage1" element={<HomePage1 />} />
        <Route
          path="Cashkicklanch/CashAccelerationPage/NewCashKick1"
          element={<NewCashKick />}
        />
        <Route
          path="/Cashkicklanch/CashAccelerationPage"
          element={<CashAcclerationPage />}
        />
       
        <Route
          path="NewCashKick1/CashAccelerationPage/NewCashKick1"
          element={<NewCashKick />}
        />
        <Route
          path="reviewcashkick"
          element={<ReviewCashKick></ReviewCashKick>}
        />
        <Route path="newcashmodel" element={<NewcashKick></NewcashKick>} />
      </Routes>
    </div>
  )
}

export default Page
