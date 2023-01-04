import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo, Nav, Navs, Hnavs, Svg, Svgbtn, Span } from '../styles/styles'
import { useThemeContext } from './Context'



export default function Navbar() {

  const [hamburger, setHamburger] = useState(true)
const {theme} = useThemeContext()

  return (
    <div>
      <Nav>
        <Link to={'/'}><Logo src='/alt.png' alt="logo" /></Link>
        <Navs theme={theme} className='navs'>
        <NavLink to='/' end className={({ isActive }) => (isActive ? 'link':'nolink')}>Home</NavLink>

          
            <NavLink to='/counter1' className={({ isActive }) => (isActive ? 'link':'nolink')}>Counter 1</NavLink>
          

          <NavLink to='/counter2' className={({ isActive }) => (isActive ? 'link':'nolink')}>Counter 2</NavLink>

          <NavLink to='/errorBoundary' className={({ isActive }) => (isActive ? 'link':'nolink')}>Error Boundary</NavLink>

        </Navs>

        {hamburger ? (<Svgbtn theme={theme}>
          <Svg theme={theme} onClick={() => setHamburger(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </Svg>
        </Svgbtn>) : <Svgbtn theme={theme}>
          <Svg theme={theme} onClick={() => setHamburger(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </Svg>
        </Svgbtn>}
      </Nav>

      {<Hnavs className={hamburger ? 'hnavs noshow' : 'hnavs show'}>
        <NavLink to='/' end className={({ isActive }) => (isActive ? 'hlink':'nolink')} onClick={() => setHamburger(true)}>Home</NavLink>

        <NavLink to='/counter1' className={({ isActive }) => (isActive ? 'hlink':'nolink')} onClick={() => setHamburger(true)}>Counter 1</NavLink>

        <NavLink to='/counter2' className={({ isActive }) => (isActive ? 'hlink':'nolink')} onClick={() => setHamburger(true)}>Counter 2</NavLink>

        <NavLink to='/errorBoundary' className={({ isActive }) => (isActive ? 'hlink':'nolink')} onClick={() => setHamburger(true)}>Error Boundary</NavLink>
      </Hnavs>}

    </div>
  )
}

