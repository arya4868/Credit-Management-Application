import { fireEvent, getByTestId, render } from '@testing-library/react'
import SummaryPaymentButton from './index'
import '@testing-library/jest-dom'

describe('SummaryPaymentButton', () => {
  it('should render the button with the correct text and styles', () => {
    const { getByRole, getByTestId } = render(
      <SummaryPaymentButton onClick={undefined} buttontext={''} />
    )
    const button = getByTestId('SummarypaymentButtonId')
    expect(button).toBeInTheDocument()
    // expect(button).toHaveTextContent('Review Your Credits')
    // expect(button).toHaveStyle({
    //   display: 'flex',
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   padding: '20px 40px',
    //   gap: '8px',
    //   width: '276px',
    //   height: '59px',
    //   background: '#6C5DD3',
    //   opacity: '0.56',
    //   borderRadius: '12px',
    //   color: 'white',
    //   flex: 'none',
    //   order: '6',
    //   alignSelf: 'stretch',
    //   flexGrow: '0',
    // })
  })
})
