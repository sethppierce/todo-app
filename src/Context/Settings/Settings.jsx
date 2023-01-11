import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [displayed, setDisplayed] = useState(3)
  const [hide, setHide] = useState(false);
  const [sortBy, setSortBy] = useState('difficulty')


  let values = {
    displayed,
    hide,
    sortBy,
    setHide,
    setDisplayed,
    setSortBy
  }

  useEffect(() => {
    const pref = JSON.parse(localStorage.getItem('pref'))
    if(pref){
      setHide(pref.head)
      setDisplayed(pref.displayed)
      setSortBy(pref.sortBy)
    }
  },[])
  
  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
};

export default SettingsProvider;
