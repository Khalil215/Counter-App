import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
import styled from "styled-components"


export default function Layout() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  )
}
