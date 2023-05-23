import React, { useState } from 'react'
import rows from '../../organism/NewCashKick/CashKick.json'
import HeadingMolecule from '../../molecules/HeadingMolecule'
import { ButtonCashAccleration } from '../../molecules/ButtonCashAccleration'
import sync from '../../../../public/Asset/Images/Text Button.svg'
import syncimg from '../../../../public/Asset/Images/refresh-2.svg'
import { useLocation } from 'react-router-dom'
import ReviewTable from '../ReviewTable'

import {
  styled,
  Stack,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
} from '@mui/material'
import { tableData } from '../../../../data/TableData'
import { CustomTableCell, MuiTableStyle } from '../../../StyleComponent'
import theme from '../../../../Themes'

const Container = styled('div')({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '32px',
  gap: '20px',
  position: 'absolute',
  width: '930px',
  height: '530px',
  left: '265px',
  top: '325px',
  background: '#201F24',
  border: '1px solid #28272B',
  borderRadius: '12px',
})

interface Props {
  selectedRowData: any
}

const CashAcclerationTable = () => {
  const [showContracts, setShowContracts] = useState(true)

  const handleContractsClick = () => {
    setShowContracts(true)
  }

  const handleCashKicksClick = () => {
    setShowContracts(false)
  }

  const date = new Date()
  const dateString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const location = useLocation()
  const totalpayamount = location.state?.totalpayamount
  const paybackamount = location.state?.paybackamount

  const selectedRow = location.state?.selectedRows
  const selectedRowData = tableData.filter((item: any) => {
    return selectedRow?.includes(item.id)
  })
  

  return (
    <MuiTableStyle style={{ width: '74vw', top: '50%', height: '50vh' }}>
      <Stack direction="row" spacing={70}>
        <HeadingMolecule text="Cash Acceleration" />
        <Stack direction="row" spacing={1}>
          <img src={syncimg} alt="syncing" height="20px" />
          <img src={sync} alt="sync" height="20px" />
        </Stack>
      </Stack>
      <div style={{ display: 'flex' }}>
        <Stack direction="row" spacing={2}>
          <ButtonCashAccleration
            text="My Contracts"
            onClick={handleContractsClick}
          />
          <ButtonCashAccleration
            text="My Cash Kicks"
            onClick={handleCashKicksClick}
          />
        </Stack>
      </div>
      {showContracts ? (
        <TableContainer component={Paper} style={{ width: '70vw' }}>
          <ReviewTable selectedData={selectedRowData} />
        </TableContainer>
      ) : (
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  background: '#262529',
                }}
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  background: '#262529',
                }}
              >
                Status
              </TableCell>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  background: '#262529',
                }}
              >
                Maturity
              </TableCell>

              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  background: '#262529',
                }}
              >
                Total Recieved
              </TableCell>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  background: '#262529',
                }}
              >
                Total Financed
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.Index}>
                <TableCell
                  style={{
                    color: 'white',
                    borderBottom: 'none',
                    background: '#262529',
                  }}
                >
                  {row.Name}
                </TableCell>
                <TableCell
                  style={{
                    color: 'white',
                    borderBottom: 'none',
                    background: '#262529',
                  }}
                >
                  {row.Status}
                </TableCell>
                <TableCell
                  style={{
                    color: 'white',
                    borderBottom: 'none',
                    background: '#262529',
                  }}
                >
                  {dateString}
                </TableCell>
                <TableCell
                  style={{
                    color: 'white',
                    borderBottom: 'none',
                    background: '#262529',
                  }}
                >
                  {paybackamount}
                </TableCell>
                <TableCell
                  style={{
                    color: 'white',
                    borderBottom: 'none',
                    background: '#262529',
                  }}
                >
                  {totalpayamount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </MuiTableStyle>
  )
}

export default CashAcclerationTable
