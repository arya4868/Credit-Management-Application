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

interface ReviewTableProps {
  selectedData: any
}

const ReviewTable = (props: ReviewTableProps) => {
  console.log(props.selectedData, 'the table data')
  return (
    <div>
      <TableContainer
        component={Paper}
        style={{ maxHeight: '26vh', overflow: 'auto' }}
      >
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
              backgroundColor: theme.colors.TableDataHeadingBackground,
            }}
          >
            <TableRow>
              <CustomTableCell>Name</CustomTableCell>
              <CustomTableCell>Type</CustomTableCell>
              <CustomTableCell>Per Payment</CustomTableCell>
              <CustomTableCell>Term Length</CustomTableCell>
              <CustomTableCell>Payment accepted</CustomTableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{ backgroundColor: '#393552', color: 'white' }}>
            {props.selectedData?.map((row: any) => {
              return (
                <TableRow
                  key={row.Name}
                  sx={{
                    '&:last-child td, &:last-child th': {
                      borderBottom: 'none',
                    },
                  }}
                >
                  <CustomTableCell
                    component="th"
                    scope="row"
                    style={{ color: 'white', borderBottom: 'none' }}
                  >
                    {row.Name}
                  </CustomTableCell>

                  <CustomTableCell
                    style={{ color: 'white', borderBottom: 'none' }}
                  >
                    {row.Type}
                  </CustomTableCell>
                  <CustomTableCell
                    style={{ color: 'white', borderBottom: 'none' }}
                  >
                    ${row.PerPayment}
                  </CustomTableCell>
                  <CustomTableCell
                    style={{
                      color: 'white',
                      borderBottom: 'none',
                    }}
                  >
                    {row.TermLength}
                  </CustomTableCell>
                  <CustomTableCell
                    style={{ color: 'white', borderBottom: 'none' }}
                  >
                    {`$ ${row.Payment}`}
                  </CustomTableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ReviewTable
