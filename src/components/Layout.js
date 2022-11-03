import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
import styled from "styled-components"


export default function Layout() {
  return (
    <div>
      <Navbar />
      <Vh>
        <Outlet />
      </Vh>
      <Footer />
    </div>
  )
}

const Vh = styled.div`
height: 75vh;
`