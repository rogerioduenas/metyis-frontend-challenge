import React, { useState, useEffect, useContext } from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import Ping from './Ping';
import FactsContext from '@/context/FactsContext';
import { getRandomYearFact } from '@/pages/api/getRandomYearFact';

const imageStyle = {
  transform: 'rotate(180deg)',
  cursor: 'pointer'
};

const years = [1800, 1850, 1900, 1950, 2000];

function Timeline() {
  const {
    fact,
    setFact,
    currentFactIndex,
    setCurrentFactIndex,
  } = useContext(FactsContext);

  const [bgColor, setBgColor] = useState('primary');

  useEffect(() => {
    if (fact.length === 0) {
      setBgColor('primary');
    }
  }, [fact]);

  const changeBgColor = () => {
    setBgColor((prevColor) => (prevColor === '#909c9a' ? '#d09c8c' : '#909c9a'));
  };

  const getYearFact = async () => {
    const newFact = await getRandomYearFact();
    if (newFact && newFact.number) {
      setFact((prevFacts) => {
        const updatedFacts = [...prevFacts, newFact];
        setCurrentFactIndex(updatedFacts.length - 1);
        return updatedFacts;
      });
    } else {
      console.error('Erro ao adicionar fato do ano. Retorno inválido:', newFact);
    }
  };

  const handleFact = () => {
    getYearFact();
    changeBgColor();
  };

  const pingPosition = (index) => {
    const baseYear = 1800;
    const scale = 2;
    const date = fact[index]?.number || baseYear;
    return (date - baseYear) / scale;
  };

  const handlePrevious = () => {
    setCurrentFactIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : fact.length - 1
    );
  };

  const handleNext = () => {
    setCurrentFactIndex((prevIndex) =>
      prevIndex < fact.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Box
      sx={{
        background: `${bgColor}`,
        position: 'relative',
        height: '100%',
        width: '100%',
        "@media (max-width: 1024px)": {
          height: '30%',
        },
      }}
    >
      <Button
        variant="outlined"
        color={fact.length > 0 ? 'primary' : 'secondary'}
        onClick={handleFact}
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '250px',
          padding: '10px',
          transform: 'translate(-50%, -50%)',
          "@media (max-width: 1024px)": {
            top: '20%',
          },
          "@media (max-width: 500px)": {
            top: '13%',
            width: '230px',
            padding: '5px',
          },
        }}
      >
        Generate Random Year Fact
      </Button>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          bottom: '0',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '60px',
          }}
        >
          {fact.length >= 1 && (
            <Ping color="black" position={pingPosition(currentFactIndex)} />
          )}
          {fact.length > 1 && (
            <Ping
              color="white"
              position={pingPosition(
                currentFactIndex > 0
                  ? currentFactIndex - 1
                  : fact.length - 1
              )}
            />
          )}
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              padding: '2%',
            }}
          >
            <Image
              height={25}
              width={25}
              src="/assets/icons/arrow.svg"
              alt="Previous"
              style={{ cursor: 'pointer' }}
              onClick={handlePrevious}
            />
            <Image
              height={25}
              width={25}
              src="/assets/icons/arrow.svg"
              alt="Next"
              style={imageStyle}
              onClick={handleNext}
            />
          </Box>
        </Box>
        <Box
          sx={{
            minHeight: '100px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            borderTop: '1px solid black',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '80%',
              marginTop: '-10px',
            }}
          >
            {fact.length > 0 &&
              years.map((data) => (
                <Box
                  key={data}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '0',
                  }}
                >
                  <Box
                    sx={{
                      width: '2px',
                      height: '10px',
                      backgroundColor: 'black',
                    }}
                  />
                  <Typography fontSize={30}>{data}</Typography>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Timeline;
