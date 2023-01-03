import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
import ToggleModes from "./ToggleModes"


export default function Layout() {
  return (
    <div>
      <Navbar />
      <ToggleModes />
      <Outlet />
      <Footer />
    </div>
  )
}
