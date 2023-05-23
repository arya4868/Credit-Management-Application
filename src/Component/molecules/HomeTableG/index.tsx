import React from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from '@mui/material'
import theme from '../../../../Themes'
import { CustomTableCell } from '../../../StyleComponent'

const CashKickTableG = () => {
  return (
    <div>
      <TableContainer component={Paper} style={{ width: '70vw' }}>
        <Table
          aria-label="simple-table"
          style={{
            background: theme.colors.TableDataHeadingBackground,
          }}
        >
          <TableHead
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              backgroundColor: theme.colors.CashButtonBackground,
            }}
          >
            <TableRow>
              <CustomTableCell>Due Date</CustomTableCell>
              <CustomTableCell>Status</CustomTableCell>
              <CustomTableCell>Expected Amount</CustomTableCell>
              <CustomTableCell>Outstanding</CustomTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow
              sx={{
                '&:last-child td, &:last-child th': { borderBottom: 'none' },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ color: 'white', borderBottom: 'none' }}
              >
                Mar 03,2023
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Upcoming
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                -$14,565.55
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                -$123,000.25
              </TableCell>
            </TableRow>

            <TableRow
              sx={{
                '&:last-child td, &:last-child th': { borderBottom: 'none' },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ color: 'white', borderBottom: 'none' }}
              >
                April 03,2023
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Upcoming
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                -$10,585.55
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                -$193,880.25
              </TableCell>
            </TableRow>

            <TableRow
              sx={{
                '&:last-child td, &:last-child th': { borderBottom: 'none' },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ color: 'white', borderBottom: 'none' }}
              >
                jun 13,2022
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Upcoming
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                -$16,345.55
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                -$153,000.25
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CashKickTableG
