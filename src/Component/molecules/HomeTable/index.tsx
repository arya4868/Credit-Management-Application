import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  styled,
} from '@mui/material'
import ChequeImg from '../../../../public/Asset/Images/ChequeImg.svg'
import ImageComponent from '../../atoms/Images'
import theme from '../../../../Themes'
import HeadingMolecule from '../HeadingMolecule'
import { CustomTableCell } from '../../../StyleComponent'

const StyleImage = styled('div')({
  paddingLeft: '23vw',
})

const CashKickTable = () => {
  return (
    <div>
      <HeadingMolecule text="Your payments" />
      <TableContainer
        component={Paper}
        style={{ width: '70vw', marginTop: '3vh' }}
      >
        <Table
          aria-label="simple-table"
          style={{
            background: theme.colors.TableDataHeadingBackground,

            height: 300,
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
                colSpan={5}
                style={{
                  color: 'white',
                  borderBottom: 'none',
                  height: '100px',
                }}
              >
                <StyleImage>
                  <ImageComponent
                    source={ChequeImg}
                    alt="inage"
                    height={150}
                  ></ImageComponent>
                </StyleImage>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CashKickTable
