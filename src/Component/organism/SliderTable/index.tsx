import {
  Table,
  Checkbox,
  Paper,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import React from 'react'

import HeadingMolecule from '../../molecules/HeadingMolecule'
import { tableData } from '../../../../data/TableData'
import { CustomTableCell, MuiTableStyle } from '../../../StyleComponent'

import theme from '../../../../Themes/index'
import ImageComponent from '../../atoms/Images'
import Minusicon from '../../../../public/Asset/Images/minus-square.svg'
import CheckedIcon from '../../../../public/Asset/Images/checked_icon.svg'
import UnCheckedIcon from '../../../../public/Asset/Images/unchecked_icon.svg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  cell: {
    fontSize: '66px', 
  },
})

interface SliderTableProps {
  selectAll: boolean
  selected: number[]
  onHandleSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void
  onHandleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void
}

const SliderTable = (props: SliderTableProps) => {
  const classes = useStyles()
  const isSelected = (id: number) => props.selected?.indexOf(id) !== -1

  return (
    <div data-testid="slidertable">
      <MuiTableStyle>
        <HeadingMolecule text="Your Contracts" />
        <TableContainer component={Paper} style={{ width: '45vw' }}>
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
                <CustomTableCell>
                  <Checkbox
                    data-testid="Maincheckbox"
                    icon={
                      <ImageComponent
                        source={UnCheckedIcon}
                        height={18}
                        width={18}
                        alt="uncheck"
                      />
                    }
                    checkedIcon={
                      <ImageComponent
                        source={CheckedIcon}
                        height={18}
                        width={18}
                        alt="check"
                      />
                    }
                    indeterminateIcon={
                      <ImageComponent
                        source={Minusicon}
                        height={18}
                        width={18}
                        alt="minus"
                      />
                    }
                    checked={props.selectAll}
                    onChange={props.onHandleSelectAll}
                    indeterminate={
                      props.selected?.length > 0 &&
                      props.selected?.length < tableData?.length
                    }
                  />
                </CustomTableCell>
                <CustomTableCell>Name</CustomTableCell>
                <CustomTableCell>Type</CustomTableCell>
                <CustomTableCell>Per Payment</CustomTableCell>
                <CustomTableCell>Term Length</CustomTableCell>
                <CustomTableCell>Payment</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => {
                const isRowSelected = isSelected(row.id)

                return (
                  <TableRow
                    key={row.id}
                    hover
                    style={{
                      background: isRowSelected
                        ? `${theme.colors.ReviewButtonBackground}`
                        : `${theme.colors.CashButtonBackground}`,
                    }}
                  >
                    <CustomTableCell padding="checkbox">
                      <Checkbox
                        data-testid="contract-a-checkbox"
                        name="myCheckbox"
                        icon={
                          <ImageComponent
                            source={UnCheckedIcon}
                            height={18}
                            width={18}
                            alt="uncheck"
                          />
                        }
                        checkedIcon={
                          <ImageComponent
                            source={CheckedIcon}
                            height={18}
                            width={18}
                            alt="check"
                          />
                        }
                        checked={isRowSelected}
                        onChange={(event) =>
                          props.onHandleChange(event, row.id)
                        }
                      />
                    </CustomTableCell>
                    <CustomTableCell>{row.Name}</CustomTableCell>
                    <CustomTableCell>{row.Type}</CustomTableCell>
                    <CustomTableCell> {`$ ${row.PerPayment}`}</CustomTableCell>
                    <CustomTableCell>{row.TermLength}</CustomTableCell>
                    <CustomTableCell> {`$ ${row.Payment}`}</CustomTableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </MuiTableStyle>
    </div>
  )
}

export default SliderTable
