import * as React from 'react'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import AlertTitle from '@mui/material/AlertTitle'
import { IconButton } from '@mui/material'
import { HiX } from 'react-icons/hi'
import Collapse from '@mui/material/Collapse'
import { IAlertProps } from './alert.interface'

export const DefaultAlert = ({ ...props }: IAlertProps) => {
  const [open, setOpen] = React.useState(true)
  return (
    <Stack sx={{ width: '400px', background: `${props.bgColor}` }} spacing={2}>
      <Collapse in={open}>
        <Alert
          severity={props.severity}
          variant={props.variant}
          color={props.color}
          icon={props.icon}
          sx={{ border: `1px solid ${props.border}` }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
              }}
            >
              <HiX fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle sx={{ textAlign: 'center', margin: '-8px 0px 0px 0px' }}>
            {props.title}
          </AlertTitle>
          {props.message}
        </Alert>
      </Collapse>
    </Stack>
  )
}
