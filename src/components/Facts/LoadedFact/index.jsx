import React, { useContext } from 'react'
import { Typography, Box } from '@mui/material'
import Image from 'next/image'
import FactsContext from '@/context/FactsContext';

const dateStyle = {
  width: '100px',
  wordBreak: "break-word",
  lineHeight: "0.8",
}

function LoadedFact() {

  const { fact, setFact, currentFactIndex, setCurrentFactIndex } = useContext(FactsContext);

  const currentFact = fact[currentFactIndex];

  const restartApp = () => setFact([])

  const deleteFact = () => {
    const newArray = fact.filter((_, index) => index !== currentFactIndex)
    setFact(newArray)

    if (newArray.length > 0) {
      return setCurrentFactIndex((prevIndex) =>
        prevIndex >= newArray.length ? newArray.length - 1 : prevIndex
      )
    }

    return setCurrentFactIndex(0);
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10%'
      }}>
      <Box
        sx={{
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '40px',
        }}>
        <Typography
          variant='h1'
          fontWeight='700'
          style={dateStyle}>
          {currentFact?.number || 'No Fact Available'}
        </Typography>
        <Typography
          variant='text'>
          <Typography variant="text">
            {currentFact?.date ? `${currentFact.date}: ` : ''}
            {currentFact?.text || 'No details available.'}
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
        <Image
          src="/assets/icons/close.svg"
          width={40}
          height={40}
          alt="Picture of the author"
          onClick={restartApp}
          style={{ cursor: 'pointer' }}
        />
        <Image
          src="/assets/icons/delete.svg"
          width={40}
          height={40}
          alt="Picture of the author"
          onClick={deleteFact}
          style={{ cursor: 'pointer' }}
        />
      </Box>
    </Box>
  )
}

export default LoadedFact