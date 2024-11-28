import React, { useState, createContext } from 'react';

export const FactsContext = createContext();

export const FactsContextProvider = ({ children }) => {
  const [fact, setFact] = useState([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  return (
    <FactsContext.Provider
      value={{
        fact,
        setFact,
        currentFactIndex,
        setCurrentFactIndex,
      }}>
      {children}
    </FactsContext.Provider>
  );
};

export default FactsContext;