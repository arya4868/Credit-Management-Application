import React, { useState } from 'react'
import Button from '../../atoms/Button'
import ImageComponent from '../../atoms/Images'
import { NavLink, useNavigate } from 'react-router-dom'
import home from '../../../../public/Asset/Images/home.svg'
import coin from '../../../../public/Asset/Images/coin.svg'
import flash from '../../../../public/Asset/Images/flash.svg'
import {
  StyleLeftNav,
  StyledCashButton,
  StyledHomeButton,
  StyledHomeCashFrame,
  StyledWatchButton,
} from '../../../StyleComponent'



const HomeButton = () => {
  const navigate1 = useNavigate()
  const navigate2 = useNavigate()

  const [clicked, setClicked] = useState(true)

  const handleClick = () => {
    if (clicked) {
      navigate2('/CashAccelerationPage')
      setClicked(false)
    }
  }

  return (
    <StyleLeftNav>
      <StyledHomeCashFrame>
        <StyledHomeButton>
          <Button
            variant="outlined"
            size="medium"
            fullWidth
            startIcon={
              <ImageComponent source={home} alt="home" height={18} width={18} />
            }
            sx={{
              width: '200px',
              height: '40px',
              background: '#201F24',
              color: '#E8E7F0',
              border: '#E8E7F0',
              borderRadius: '10px',
              textTransform: 'capitalize',
              justifyContent: 'flex-start',
              boxShadow: 'none',
              '&:hover': {
                background: '#2D2D30',
                border: '#E8E7F0',
              },
            }}
            onClick={() => navigate1('/')}
          >
            Home
          </Button>
        </StyledHomeButton>

        <StyledCashButton>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            startIcon={
              <ImageComponent source={coin} alt="coin" height={18} width={18} />
            }
            sx={{
              width: '200px',
              height: '40px',
              background: '#201F24',
              color: '#E8E7F0',
              border: 'white',

              borderRadius: '10px',
              textTransform: 'capitalize',
              boxShadow: 'none',
              '&:hover': {
                background: '#2D2D30',
                border: '#E8E7F0',
              },
            }}
            onClick={handleClick}
          >
            Cash Acceleration
          </Button>
        </StyledCashButton>
      </StyledHomeCashFrame>

      <StyledWatchButton style={{ top: '90%' }}>
        <Button
          variant="contained"
          size="large"
          startIcon={
            <ImageComponent source={flash} alt="home" height={18} width={18} />
          }
          sx={{
            width: '200px',
            height: '40px',
            background: '#201F24',
            color: '#E8E7F0',
            textTransform: 'capitalize',
            boxShadow: 'none',

            justifyContent: 'flex-start',
            '&:hover': {
              background: '#2D2D30',
            },
          }}
        >
          Watch how to
        </Button>
      </StyledWatchButton>
    </StyleLeftNav>
  )
}

export default HomeButton
