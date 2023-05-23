import { ContextReplacementPlugin } from 'webpack'
import { ModalHeader } from '../../molecules/ModalHeader'
import { Box, Container, Stack } from '@mui/material'
import styled from '@mui/material/styles/styled'
import MuiTypography from '../../atoms/Typography'
import review_gif from '../../../../public/Asset/Images/review-gif.svg'
import React from 'react'
import Button from '../../atoms/Button/index'
import ImageComponent from '../../atoms/Images/index'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  ReviewStyled,
  Styled1,
  Styled14,
  Styled15,
  Styled2,
  Styled3,
  Styled4,
  Styled5,
  Styled6,
  Styled7,
  Styled8,
  Styled9,
} from '../../../StyleComponent'
import theme from '../../../../Themes'
import Term from '../../molecules/SummaryTerm'

export interface ModalsProps {
  Open?: boolean
  Close?: () => React.ReactNode
  selected_Row?: any
}

const Cashkicklanch: React.FC<ModalsProps> = ({
  Open,
  Close,
  children,
  selected_Row,
}) => {
  const navigate1 = useNavigate()
  const navigate2 = useNavigate()
  const navigate3 = useNavigate()
  const handleClose = () => {
    return
  }
  const location = useLocation()
  const totalpayamount = location.state?.totalpayamount
  const paybackamount = location.state?.paybackamount
  const selectedRows = location.state?.selectedRows
  console.log(selectedRows)
  console.log(typeof selectedRows)

  const gettotalpay = () => {
    navigate2('/CashAccelerationPage', {
      state: {
        totalpayamount: totalpayamount,
        paybackamount: paybackamount,
        selectedRows: selectedRows,
      },
    })
  }
  const gettotalfinanced = () => {
    navigate1('/HomePage1', {
      state: {
        paybackamount: paybackamount,
      },
    })
  }

  const modalsStyles = {
    display: 'block',
    width: '45vw',
    borderRadius: '12px',
    backgroundColor: '#262529',
    marginLeft: '25%',
    marginTop: '9%',
  }
  return (
    <Styled15>
      <React.Fragment>
        <Box style={modalsStyles}>
          <Styled1>
            <ModalHeader
              title={'Cash kick launched successfully!'}
              description={'We are reviewing your cash kick'}
            />
          </Styled1>
          <Styled2>
            <Button
              sx={{
                color: '#C9C8CC',
                backgroundColor: '#2D2D30',
                '&:hover': { background: '#2D2D30' },
              }}
              onClick={() => navigate3(-1)}
            >
              x
            </Button>
          </Styled2>
          <ReviewStyled>
            <Styled3>
              <ImageComponent source={review_gif} alt="review" />
            </Styled3>

            <MuiTypography variant="h2">
              Your cash kick is under review
            </MuiTypography>

            <Styled5>
              <MuiTypography color={theme.colors.DarkTextColor} variant="body1">
                It will remain on pending state until we review it internally.
                This can take upto 5 mins to couple of hours. Once reviewed, the
                cash will be transferred to your account and you’ll be notified.
              </MuiTypography>
            </Styled5>
          </ReviewStyled>
          <Styled14>
            {' '}
            <Button
              sx={{
                height: '5vh',

                color: '#C9C8CC',
                backgroundColor: '#2D2D30',
                textTransform: 'capitalize',
                '&:hover': { background: '#2D2D30' },
              }}
              onClick={gettotalfinanced}
            >
              Close
            </Button>
            <Button
              sx={{
                height: '5vh',
                color: '#E8E8E9',
                backgroundColor: '#6C5DD3',
                textTransform: 'capitalize',
                '&:hover': { background: '#6C5DD3' },
              }}
              onClick={gettotalpay}
            >
              View cash kicks
            </Button>
          </Styled14>
        </Box>
      </React.Fragment>
    </Styled15>
  )
}

export default Cashkicklanch
