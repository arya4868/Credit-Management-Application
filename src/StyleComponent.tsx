import styled from '@emotion/styled'

import theme from '../Themes'

import { Stack, TableCell } from '@mui/material'

export const CustomTableCell = styled(TableCell)({
  borderBottom: 'none',
  color: '#A5A5A6',
  fontFamily: 'Gilroy',
  fontSize: '14px',
})
export const TermSelectedStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`
export const TermStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const SelectedStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
`
export const SlideStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 7.5vh;
`
export const SelectedAmountStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`
export const PayBackStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const RateStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const RateTextStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 95px;
  gap: 5px;
`
export const PayOutStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const DividerAtomStyle = styled.div`
  width: 280px;
  height: 0px;
`
export const GroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
`
export const ReviewButtonStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  width: 16vw;
  border-radius: 12px;
`
export const PriceHeadigStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`

export const UpperMidSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const TextBoxStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 8px;
  position: absolute;
  left: 20%;
  top: 15%;
  border-radius: 12px;
`
export const StyledMidSectionHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  left: 20%;
  top: 40px;
`
export const StyledMidSectionSubHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  justify-content: space-between;
  align-items: flex-start;
  justify-items: center;
  left: 80%;
  top: 20%;
`
export const MidTableHeadigStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`
export const TotalContainerStyle = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
`
export const MuiTableStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 0px 32px 32px;
  gap: 20px;
  position: absolute;
  height: 68.8vh;
  width: 48vw;
  /* left: 278px; */
  left: 20%;
  top: 23%;
  border-radius: 12px;
  border: ${theme.colors.OrganismBorder};
  background: ${theme.colors.OrganismBackground};
`
export const PriceCardStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 15px;
  position: absolute;
  width: 24.5vw;
  left: 70%;
  top: 23%;
  border-radius: 12px;
  border: ${theme.colors.OrganismBorder};
  background: ${theme.colors.OrganismBackground};
`
export const StyledHomeButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  border-radius: 12px;
  margin-left: 12px;
`
export const StyleLeftNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6vh;
`
export const StyledHomeCashFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  height: 66vh;
`
export const StyledCashButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  border-radius: 12px;
  margin-top: 30px;
  margin-left: 10px;
`
export const StyledWatchButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 12px;
  border-radius: 12px;
`

export const Styled1 = styled(Stack)({
  width: '450px',
  borderRadius: '12px',
  backgroundColor: '#262529',
  padding: '24px 30px 24px 10px',
  marginLeft: '10px',
  color: '#E8E7F0',
})
export const Styled2 = styled(Stack)({
  height: '32px',
  width: '32px',
  backgroundColor: '#262529',
  color: '#D4D2DE',
  fontSize: '20px',
  marginLeft: '520px',
  marginTop: '-70px',
  border: '1px solid #262529',
})
export const Styled3 = styled(Stack)({
  alignSelf: 'center',
})
export const Styled4 = styled(Stack)({
  fontFamily: 'Gilroy',
  textAlign: 'center',
  color: '#E8E7F0',
})
export const Styled5 = styled(Stack)({
  textAlign: 'center',
  padding: '24px 30px 24px 20px',
})
export const Styled6 = styled(Stack)({
  padding: '32px 40px 24px 40px',
  marginTop: '30px',
})
export const Styled7 = styled(Stack)({
  marginLeft: '190px',
  width: '133px',
  height: '55px',
  padding: '20px, 40px, 20px, 40px',
  borderRadius: '12px',
  gap: '8px',
})
export const Styled8 = styled(Stack)({
  width: '208px',
  height: '55px',
  marginLeft: '300px',
  marginTop: '-75px',
  borderadius: '12px',
  padding: '20px 40px 20px 40px',
  fontFamily: 'Gilroy',
  fontsize: '16px',
  fontweight: '600',
  lineheight: '19px',
  Textalign: 'center',
})

export const Styled9 = styled(Stack)({
  background: 'rgba(16, 15, 28, 0.72)',
  height: '100vh',
  width: '100vw',
})

export const Styled19 = styled(Stack)({
  backgroundColor: '#262529',
  marginTop: '24px',
  marginLeft: '40px',
  display: 'flex',
  flexDirection: 'column',
})

export const Styled10 = styled(Stack)({
  height: '32px',
  width: '32px',
  fontSize: '20px',
  marginLeft: '530px',
  marginTop: '-60px',
  border: '1px solid #262529',
})

export const Styled11 = styled(Stack)({
  marginLeft: '20px',
  width: '100%',
  marginTop: '30px',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
})

// export const Styled12 = styled(Stack)({
//   marginLeft: '190px',
//   marginTop: '0px',
//   width: '133px',
//   height: '55px',
//   padding: '20px, 40px, 20px, 40px',
//   borderRadius: '12px',
//   gap: '8px',
// })

// export const Styled13 = styled(Stack)({
//   width: '208px',
//   height: '55px',
//   marginLeft: '315px',
//   marginTop: '-75px',
//   borderadius: '12px',
//   padding: '20px 40px 20px 40px',
//   fontFamily: 'Gilroy',
//   fontsize: '16px',
//   fontweight: '600',
//   lineheight: '19px',
//   Textalign: 'center',
// })
export const Styled15 = styled(Stack)({
  height: '100vh',
  width: '100%',
  background: 'rgba(16, 15, 28, 0.72)',
  backdropFilter: 'blur(8px)',
})
export const Styled14 = styled(Stack)({
  padding: '32px 40px 24px 40px',
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '8px',
})
export const ReviewStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 15px;
`
export const ModalHeaderStyle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 30vw;
  flex-direction: column;
`

export const LaunchCashKickTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const CashKickTextStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 13vw;
`
export const LaunchCashKickCardStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 20px;
  position: absolute;
  width: 24vw;
  /* height: 32vh; */
  left: 70%;
  top: 17%;
  background: #201f24;
  border: 1px solid #28272b;
  border-radius: 12px;
`
export const CashAccCardStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8.6vh;
  gap: 12px;
  position: absolute;
  width: 49vw;
  /* height: 32vh; */
  left: 20%;
  top: 17%;
  background: #201f24;
  border: 1px solid #28272b;
  border-radius: 12px;
`
export const CashAccStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2vh;
`
export const CashAccStyle1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vw;
`
export const StyledGreeting = styled.div`
  position: absolute;
  left: 10%;
  top: 17%;
  border-radius: 12px;
`
export const AvatarStyle = styled.div`
  display: flex;
  flex-direction: row;
  left: 50%;
  top: 10%;
  right: 10%;
`
export const Container = styled('div')({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '40px 20px 20px',
  gap: '60px',
  width: '18vw',
  left: '0%',
  top: '0%',
  bottom: '0%',
  background: '#201F24',
  borderRight: '1px solid #222124',
  borderRadius: '0px',
})
export const StyledReport = styled('div')({
  boxSizing: 'border-box',
  padding: '17px',
  position: 'absolute',
  width: '24vw',
  height: '32vh',
  left: '20%',
  top: '17%',
  color: 'white',
  background: '#201F24',
  border: '1px solid #28272B',
  borderRadius: '12px',
})
export const StyledReport1 = styled('div')({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '17px',
  gap: '20px',
  position: 'absolute',
  width: '24vw',
  height: '32vh',
  left: '45%',
  top: '17%',
  background: '#201F24',
  border: '1px solid #28272B',
  borderRadius: '12px',
})
export const StyledCardTypo = styled('div')({
  width: '196px',
  height: '22px',
  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  lineHeight: '140%',
  flex: 'none',
  order: '0',
  flexGrow: '0',
})

export const StyledButton = styled('button')({
  background: '#484752',
  borderRadius: '5px',
  color: '#FFFFFF',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  height: '42px',
  padding: '0 24px',
  '&:hover': {
    background: '#60626B',
  },
})
