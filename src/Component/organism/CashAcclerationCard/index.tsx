import React from 'react'
import CardAcclerationMolecule from '../../molecules/CardAcclerationMolecule'
import calendar from '../../../../public/Asset/Images/calendar.svg'
import documentdownload from '../../../../public/Asset/Images/document-download.svg'
import percent from '../../../../public/Asset/Images/percentage-square.svg'
import { CashAccCardStyle } from '../../../StyleComponent'
import { useLocation } from 'react-router'

const CashAcclerationCard: React.FC = () => {
  const location = useLocation()
  const totalpayamount = location.state?.totalpayamount

  let value: number
  if (totalpayamount === undefined) {
    value = 888000
  } else {
    value = 888000 - totalpayamount
  }

  return (
    <div>
      <CashAccCardStyle>
        <CardAcclerationMolecule
          text="Term cap"
          value="12 Months"
          source={calendar}
        />
        <CardAcclerationMolecule
          text="Available credit"
          value={`$ ${value.toString()}`}
          source={documentdownload}
        />
        <CardAcclerationMolecule
          text="Max interest rate"
          value="12.00%"
          source={percent}
        />
      </CashAccCardStyle>
    </div>
  )
}

export default CashAcclerationCard
