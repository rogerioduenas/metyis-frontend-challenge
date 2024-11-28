import React from 'react'
import { Box } from '@mui/material';

function Ping({color, position}) {

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '80%',
        height: '100%',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
      }}>
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '0px',
          marginLeft: `${position}%`,
          bottom: '0'
        }}>
        <Box
          sx={{
            width: '10px',
            height: '10px',
            backgroundColor: `${color}`,
            borderRadius: '50%'
          }} />
        <Box
          sx={{
            width: '2px',
            height: '20px',
            backgroundColor: `${color}`,
          }} />
      </Box>
    </Box>
  )
}

export default Ping