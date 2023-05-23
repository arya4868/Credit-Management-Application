import React, { useEffect, useState } from 'react'
import Sidebar from '../../organism/SideBar'
import Summary from '../../organism/Summary'
import SliderTable from '../../organism/SliderTable'

import { tableData } from '../../../../data/TableData'
import NewCashKickNavBar from '../../organism/NewCashKickNavBar'
import { TotalContainerStyle } from '../../../StyleComponent'

const NewCashKick = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [selected, setSelected] = React.useState<number[]>([])
  const [notSelect, setNotSelected] = React.useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ])
  const [rate, setRate] = React.useState<number>(0)
  const [selectAll, setSelectAll] = React.useState<boolean>(false)

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selected?.length > 0) {
      setSelectAll(false)
      setSelected([])
      setTotalAmount(0)
    } else if (event.target.checked) {
      setSelectAll(true)
      setSelected(tableData.map((row) => row.id))
      setTotalAmount(888000)
    } else {
      setSelectAll(false)
      setSelected([])
      setTotalAmount(0)
    }
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    if (event.target.checked) {
      setSelected([...selected, id])
    } else {
      setSelected(selected.filter((item) => item !== id))
    }
    setSelectAll(selected?.length === tableData?.length)
    handleSliderChange(new Event('change'), totalAmount)
    
  }

  useEffect(() => {
    const filteredItem = tableData.filter((row) => selected?.includes(row.id))
    console.log(filteredItem)
    const not_selected = tableData.filter((row) => !selected?.includes(row.id))
    const unSelected: number[] = []
    not_selected.forEach((item) => {
      unSelected.push(item.id)
    })
    setNotSelected(unSelected)
    let ttlPayment = 0
    filteredItem.forEach((item) => {
      ttlPayment += item.Payment
    })
    setTotalAmount(ttlPayment)
    setRate(0.12 * ttlPayment)
  }, [selected])

  const handleSliderChange = (event: Event, value: number | number[]) => {
    const sliderValue = value as number
    const selectedRows = tableData.filter((row) => selected?.includes(row.id))
    let totalSelectedPayment = selectedRows.reduce(
      (total, row) => total + row.Payment,
      0
    )
    const unselectedRows = tableData.filter(
      (row) =>
        !selected?.includes(row.id) &&
        row.Payment <= sliderValue - totalSelectedPayment
    )

    if (sliderValue < totalSelectedPayment) {
      while (totalSelectedPayment > sliderValue && selected?.length > 0) {
        const lastSelectedId = selected[selected?.length - 1]
        const lastSelected = tableData.find((row) => row.id === lastSelectedId)
        if (lastSelected) {
          totalSelectedPayment -= lastSelected.Payment
          selected.pop()
          const not_select: number[] = notSelect
          not_select.push(lastSelectedId)
          setNotSelected(not_select)
        }
      }
    } else {
      while (totalSelectedPayment < sliderValue && unselectedRows?.length > 0) {
        const firstUnselected = unselectedRows.shift()
        if (firstUnselected) {
          totalSelectedPayment += firstUnselected.Payment
          selected.push(firstUnselected.id)
          const not_selected = tableData.filter(
            (row) => !selected?.includes(row.id)
          )
          const unSelected: number[] = []
          not_selected.forEach((item) => {
            unSelected.push(item.id)
          })
        }
      }
    }

    setTotalAmount(totalSelectedPayment)
    setSelectAll(selected?.length === tableData?.length)
    setRate(0.12 * totalSelectedPayment)
  }

  const handleReset = () => {
    setTotalAmount(0)
    setSelected([])
  }
  return (
    <TotalContainerStyle>
      <Sidebar />
      <NewCashKickNavBar></NewCashKickNavBar>
      <Summary
        Selected_Row={selected}
        HandleResetBtn={handleReset}
        amountSelected={totalAmount}
        PayBackAmt={totalAmount + rate}
        TotalPayAmount={totalAmount}
        RateAmount={rate}
        HandleSliderChange={handleSliderChange}
        Slidervalue={totalAmount}
      />

      <SliderTable
        selectAll={selectAll}
        selected={selected}
        onHandleChange={handleChange}
        onHandleSelectAll={handleSelectAll}
      ></SliderTable>
    </TotalContainerStyle>
  )
}

export default NewCashKick
