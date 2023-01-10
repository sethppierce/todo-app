import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [displayed, setDisplayed] = useState(3)
  const [hide, setHide] = useState(true);
  const [sortBy, setSortBy] = useState('difficulty')


  let values = {
    displayed,
    hide,
    sortBy
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
};

export default SettingsProvider;
