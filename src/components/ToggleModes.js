import React from 'react'
import { Red, Theme, Green, Blue, Purple, Gray } from '../styles/styles'
import { useThemeContext } from './Context'

export default function ToggleModes() {

  const { theme, setThemeColor, themeColor } = useThemeContext()
  // console.log(themeColor);
  return (

    <>
      <Theme>
        <Green theme={theme} onClick={() => setThemeColor('green')}></Green>
        <Red theme={theme} onClick={() => setThemeColor('red')}></Red>
        <Blue theme={theme} onClick={() => setThemeColor('blue')}></Blue>
        <Purple theme={theme} onClick={() => setThemeColor('purple')}></Purple>
        <Gray theme={theme} onClick={() => setThemeColor('cyan')}></Gray>

      </Theme>
    </>


  )
}
