import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { FormHelperText } from '@mui/material'
import { ISelectProps } from './select.interface'

export const DefaultSelect: React.FC<ISelectProps> = ({
  helperText,
  label,
  menuItem
}) => {
  const [propertyName, setPropertyName] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setPropertyName(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={propertyName}
          label={label}
          onChange={handleChange}
        >
          {menuItem.map(
            (menuprops: { value: number | string; item: number | string }) => (
              <MenuItem value={menuprops.value} key={menuprops.item}>
                {menuprops.item}
              </MenuItem>
            )
          )}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </div>
  )
}
