import React from 'react'
import { Typography, Box } from '@mui/material'

function EmptyFact() {
  return (
    <Box
      sx={{
        backgroundImage: `url('/assets/images/background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '0 0 0 10%'
      }}>
      <Typography
        variant='h1'
        fontWeight= '700'
        color="primary" >
        Random<br /> Year<br /> Facts
      </Typography>
      <Typography
        variant='h2'
        color="primary">
        Generate random facts,<br />
        from random years
      </Typography>
    </Box>
  )
}

export default EmptyFact