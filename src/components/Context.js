import React, {
  createContext, useContext, useEffect, useState,
} from "react";

const ThemeContext = createContext();


const Context = ( {children} )=> {

  const [themeColor, setThemeColor] = useState('green')
  const [light, setLight] = useState('')
  const [dark, setDark] = useState('')
  const [loadPage, setLoadPage]= useState(false)

  useEffect(() => {

    switch (themeColor) {
      case 'green':
        setLight('#85FEA1')
        setDark('#023B1F')
        break;
      case 'blue':
        setLight('#1bffff')
        setDark('#2e3192')
        break;
      case 'red':
        setLight('#ff1c1c')
        setDark('#300000')
        break;
      case 'purple':
        setLight('#c453f3')
        setDark('#291d3b')
        break;
      case 'cyan':
        setLight('#dcdcdc')
        setDark('#333333')
        break;

      default:
        break;
    }

    setLoadPage(true)

  }, [themeColor])


  const theme = { light, dark }

  return (
    <ThemeContext.Provider value={ {theme, setThemeColor, themeColor, loadPage}} >{children}</ThemeContext.Provider>
  )
}

const useThemeContext = () => useContext(ThemeContext);

export {useThemeContext, Context}