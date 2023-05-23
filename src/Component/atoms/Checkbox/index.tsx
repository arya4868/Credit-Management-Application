import React, { useState } from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
export interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  color?: 'primary' | 'secondary' | 'error'
  disabled?: boolean
}

const MyCheckbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  color = 'primary',
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  const handleOnChange = () => {
    const newChecked = !isChecked
    setIsChecked(newChecked)
    onChange(newChecked)
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={handleOnChange}
          color={color}
          inputProps={{ 'aria-label': label }}
        />
      }
      label={label}
      disabled={disabled}
    />
  )
}

export default MyCheckbox
