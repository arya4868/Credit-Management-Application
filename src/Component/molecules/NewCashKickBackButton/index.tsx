import {
  useNavigate,
} from 'react-router-dom'
import Button from '../../atoms/Button'
import { styled } from '@mui/material'


const StyledButton = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 40px',
  gap: '8px',
  width: '200px',
  height: '20px',
  background: '#6C5DD3',
  borderRadius: '12px',
  flex: 'none',
  order: '1',
  alignSelf: 'stretch',
  flexGrow: '0',
  color: 'white',
})

const LaunchCashKickButton = () => {
  const navigate = useNavigate()

  const handleNewCashKickClick = () => {
    navigate('/NewCashKick')
  }

  return (
    <StyledButton>
      <Button
        sx={{
          width: '300px',
          height: '40px',
          background: 'transparent',
          boxShadow: 'none',
          textTransform: 'capitalize',
          '&:hover': {
            background: 'transparent',
          },
        }}
        onClick={handleNewCashKickClick}
      >
        New Cash Kick
      </Button>
    </StyledButton>
  )
}

export default LaunchCashKickButton
