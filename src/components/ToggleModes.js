import React from 'react'
import { Red, Theme, Green, Blue, Purple, Cyan } from '../styles/styles'
import { useThemeContext } from './Context'

export default function ToggleModes() {

  const {theme}= useThemeContext()
  return (
    <>
    <Theme>
      <Green theme={theme}></Green>
      <Red theme={theme}></Red>
      <Blue theme={theme}></Blue>
      <Purple theme={theme}></Purple>
      <Cyan theme={theme}></Cyan>

    </Theme>
    </>
    

  )
}
