import * as React from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { Checkbox, FormHelperText, ListItemText } from '@mui/material'
import { IMultipleSelectProps } from './select.interface'
const minusOne = -1

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 400
    }
  }
}

const MultipleSelect: React.FC<IMultipleSelectProps> = ({
  ...props
}: IMultipleSelectProps) => {
  const [propertyName, setPropertyName] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof propertyName>) => {
    const {
      target: { value }
    } = event
    setPropertyName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">{props.label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={propertyName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: 'flex',
                overflowX: 'auto',
                gap: 0.5
              }}
            >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.menuItem.map((menuItemProps) => (
            <MenuItem key={menuItemProps.item} value={menuItemProps.value}>
              <Checkbox
                checked={
                  propertyName.indexOf(menuItemProps.item.toString()) > minusOne
                }
              />
              <ListItemText primary={menuItemProps.item} />
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{props.helperText}</FormHelperText>
      </FormControl>
    </div>
  )
}
export { MultipleSelect }
