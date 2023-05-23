import { Box } from '@mui/material'
import { ModalHeader } from '../../molecules/ModalHeader'
import React, { useState } from 'react'
import Button from '../../atoms/Button'
import { useNavigate, useLocation } from 'react-router-dom'
import rows from '../../organism/NewCashKick/CashKick.json'

import {
  Styled15,
  Styled19,
  Styled10,
  Styled11,
  Styled14,
} from '../../../StyleComponent'

export interface ModalProps {
  isOpen?: boolean
  onClose?: () => void
}

export const NewcashKick = () => {
  const navigate = useNavigate()

  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleButtonClick = () => {
    navigate(-1)
  }
  const location = useLocation()
  const totalpayamount = location.state?.totalpayamount
  const paybackamount = location.state?.paybackamount
  const selectedRows = location.state?.selectedRow

 

  const handle = () => {
    rows[0].Name = value

    navigate('/Cashkicklanch', {
      state: {
        totalpayamount: totalpayamount,
        paybackamount: paybackamount,
        selectedRows: selectedRows,
      },
    })
  }

  const modalStyles = {
    height: '363px',
    width: '640px',
    borderRadius: '12px',
    backgroundColor: '#262529',
    marginTop: '203px',
    marginLeft: '470px',
  }

  return (
    <>
      <React.Fragment>
        <Styled15>
          <Box style={modalStyles}>
            <Styled19>
              <ModalHeader
                title={'Name your cash kick'}
                description={'Add a name to identify your cash kick'}
              />
            </Styled19>
            <Styled10>
              <Button
                onClick={handleButtonClick}
                sx={{
                  backgroundColor: '#262529',
                  color: '#D4D2DE',
                  textTransform: 'capitalize',
                  '&:hover': { background: '#262529' },
                }}
              >
                x
              </Button>
            </Styled10>
            <Styled11>
              <label
                htmlFor="my-input"
                style={{
                  color: value.length > 0 ? '#B4A9FF' : '#A5A5A6',
                  marginTop: '30px',
                  marginLeft: '20px',
                }}
              >
                Cash kick name
              </label>
              <input
                type="text"
                id="my-input"
                value={value}
                onChange={handleChange}
                placeholder="Ex: marketing expenses"
                style={{
                  border: value.length > 0 ? '1px solid #B4A9FF' : '#A5A5A6',
                  height: '30px',
                  width: '520px',
                  borderRadius: '12px',
                  padding: '12px 17px 12px 17px',
                  marginTop: '10px',
                  color: '#C9C8CC',
                  marginLeft: '20px',
                  backgroundColor: '#3A3A3D',
                }}
              />
            </Styled11>
            <Styled14>
              <Button
                onClick={() => navigate(-1)}
                sx={{
                  color: '#C9C8CC',
                  background: '#2D2D30',
                  textTransform: 'capitalize',
                  '&:hover': { background: '#2D2D30' },
                }}
              >
                Cancel
              </Button>

              <Button
                sx={{
                  color: '#E8E8E9',
                  background: '#6C5DD3',
                  textTransform: 'capitalize',
                  '&:hover': { background: '#6C5DD3' },
                }}
                onClick={handle}
              >
                Create cash kick
              </Button>
            </Styled14>
          </Box>
        </Styled15>
      </React.Fragment>
    </>
  )
}
