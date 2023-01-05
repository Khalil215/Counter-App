import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
import ToggleModes from "./ToggleModes"
import { useThemeContext } from "./Context"



export default function Layout() {
  const { loadPage } = useThemeContext()
  
  return (
    <div>
      {loadPage && (
      <>
      <Navbar />
      <ToggleModes />
      <Outlet />
      <Footer />
      </>
      )}
    </div>
  )
}
