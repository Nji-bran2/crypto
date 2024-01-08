/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from '@mui/material'
import React from 'react'

const OutlineButton = ({ sx = {}, arrow, children, fit, ...props })  => {
  return (
    <Button 
    varaint ="outline"
    sx={{
        borderRadius: 2,
        color: "text.primary",
        borderColor: "text.primary",
        ...sx
    }}
    {...props}
    >
       {children}
       {arrow && <KeyboardArrowRightIcon fontSize="small" sx={{ ml: 0.5 }} />}
    </Button>
  )
}

export default OutlineButton