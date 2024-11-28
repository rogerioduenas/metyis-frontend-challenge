import React from 'react'
import { Box } from '@mui/material'
import Facts from '../Facts'
import Timeline from '../Timeline'

function Container() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        "@media (max-width: 1024px)": {
          flexDirection: 'column'
        },
      }}>
      <Facts />
      <Timeline />
    </Box>
  )
}

export default Container