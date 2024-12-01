import React from 'react'
import { Box, Typography } from '@mui/material'

function ErrorMessage() {
  return (
    <Box sx={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8d7da', borderRadius: '8px' }}>
      <Typography variant="h5" color="error">
        Oops! Something went wrong...
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginTop: '16px' }}>
        We apologize, but we encountered an issue with the request. Don't worry, it's easy to fix!
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '8px' }}>
        1. Please visit the link below and click <strong>"Request temporary access to the demo server"</strong>:
      </Typography>
      <Typography variant="body1">
        <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2' }}>
          https://cors-anywhere.herokuapp.com/corsdemo
        </a>
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '16px' }}>
        After that, try again. I hope it works... if not, I guess the universe owes us an explanation! 😊
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '16px' }}>
        If the issue persists, you can check the <a href="https://github.com/rogerioduenas/metyis-frontend-challenge" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2' }}>README</a> or reach out to me. We apologize for the inconvenience!
      </Typography>
    </Box>
  )
}

export default ErrorMessage
