import React, {
  createContext, useContext, useEffect, useState,
} from "react";

const ThemeContext = createContext();


const Context = ( {children} )=> {

  const [themeColor, setThemeColor] = useState('green')
  const [light, setLight] = useState('#85FEA1')
  const [dark, setDark] = useState('#023B1F')

  useEffect(() => {

    switch (themeColor) {
      case 'green':
        setLight('#85FEA1')
        setDark('#023B1F')
        break;

      default:
        break;
    }

  }, [themeColor])


  const theme = { light, dark }

  return (
    <ThemeContext.Provider value={ {theme, setThemeColor}} >{children}</ThemeContext.Provider>
  )
}

const useThemeContext = () => useContext(ThemeContext);

export {useThemeContext, Context}