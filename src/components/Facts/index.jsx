import React, { useContext } from 'react'
import { Box } from '@mui/material'
import EmptyFact from './EmptyFact'
import LoadedFact from './LoadedFact'
import FactsContext from '@/context/FactsContext';

function Facts() {
  const { fact } = useContext(FactsContext)

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        "@media (max-width: 1024px)": {
          height: '70%'
        },
      }}>
      {fact.length > 0 ? <LoadedFact /> : <EmptyFact />}
    </Box>
  )
}

export default Facts