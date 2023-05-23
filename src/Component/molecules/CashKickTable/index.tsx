import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from '@mui/material'

const CashKickTable = () => {
  return (
    <div>
      <TableContainer
        style={{
          maxHeight: '20vh',
          overflow: 'auto',
          width: '65vw',
        }}
      >
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
                Type
              </TableCell>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  background: '#262529',
                }}
              >
                Per payment
              </TableCell>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  background: '#262529',
                }}
              >
                Total financed
              </TableCell>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  background: '#262529',
                }}
              >
                Total available
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{ backgroundColor: '#201F24', color: 'white' }}>
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
                Contract1
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Available
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Monthly
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                $12,000.25
              </TableCell>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  textAlign: 'center',
                }}
              >
                -
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                $126,722.64
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
                Contract2
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Available
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Monthly
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                $6,000.00
              </TableCell>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  textAlign: 'center',
                }}
              >
                -
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                $126,722.64
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
                Contract3
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Available
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Monthly
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                $6,000.00
              </TableCell>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  textAlign: 'center',
                }}
              >
                -
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                $9,576.22
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
                Contract6
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Available
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Monthly
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                $8,000.00
              </TableCell>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  textAlign: 'center',
                }}
              >
                -
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                $9,576.22
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
                Contract4
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Available
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Monthly
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                $6,000.00
              </TableCell>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  textAlign: 'center',
                }}
              >
                -
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                $126,722.64
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
                Contract5
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Available
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                Monthly
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                $6,000.00
              </TableCell>
              <TableCell
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  textAlign: 'center',
                }}
              >
                -
              </TableCell>
              <TableCell style={{ color: 'white', borderBottom: 'none' }}>
                $126,722.64
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CashKickTable
