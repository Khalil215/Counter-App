import styled, { css } from "styled-components"

const Logo = styled.img`
width: 120px;
height: 68px;
@media (max-width: 868px) {
  width: 100px;
  height: 57px;
}
@media (max-width: 520px) {
 width: 80px;
 height: 45.5px;
}
`
const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 40px 30px;
z-index: 1;
position: relative;
@media (max-width: 868px) {
  padding: 25px 15px;
}
@media (max-width: 520px) {
  padding: 20px 10px;
}
`
const Navs = styled.div`
display: flex;
flex-basis: 50%;
justify-content: space-around;
font-size: 19px;
font-family: Ebold;
align-self: flex-end;

@media (max-width: 868px) {
  display: none;
}
`
const Hnavs = styled.div`
position: fixed;
top: 0;
left: 0;
padding-top: 120px;
height: 100%;
width: 100%;
z-index: 0;
backdrop-filter: blur(5px);
display: none;
grid-template-rows: repeat(4,70px);
text-align: center;
font-size: 24px;
transition: .5s;
font-family: Ebold;
@media (max-width: 868px) {
  display: grid;
}
@media (max-width: 520px) {
  font-size: 18px;
  grid-template-rows: repeat(4,50px);
}
`
const Svg = styled.svg`
width: 35px;
display: none;
cursor: pointer;
transition: .5s;
&:hover{
  color: var(--light);
}
@media (max-width: 868px) {
  display: unset;
}
@media (max-width: 520px) {
  width: 30px;
}
`

const Body = styled.div`
width: 80%;
margin: 20px auto;
`
const Svgbtn = styled.button`
outline: none;
background-color: transparent;
border: none;
color: var(--dark);
`
const Head = styled.h1`
font-family: Ebold;
text-align: center;
@media (max-width: 520px) {
  font-size: 20px;
}
${p => p.small && css`
margin-top: 30px;
font-family: Elight;
`}
`

const Counter = styled.div`
margin: 30px auto;
width: 50%;
padding: 20px;
display: grid;
justify-content: center;
@media (max-width: 520px) {
  margin: 20px auto;
}
`
const Count = styled.div`
display: flex;
justify-content: space-between;
min-width: 140px;
max-width: auto;
padding: 15px 5px;
border-radius: 50px;
font-family: Ebold;
font-weight: bold;
font-size: 30px;
box-shadow: 0px 0px 3px 1px;
@media (max-width: 520px) {
  width: 100px;
  padding: 11px 2px;
  font-size: 24px;
}
`

const SVG = styled.svg`
width: 28px;
transition: all ease .3s;
cursor:pointer;
@media (max-width: 520px) {
  width: 18px;
}
`

const Reset = styled.svg`
width: 35px;
text-align: center;
margin: 15px auto;
cursor:pointer;
transition: all ease .3s;
&:hover{
  color: var(--light);
}
@media (max-width: 520px) {
  width: 25px;
  margin-bottom: 80px;
}
`

const InputCont = styled.div`
margin: 10px;
font-weight: bold;
font-size: 20px;
@media (max-width: 520px) {
  font-size: 16px;
}
`

const Input = styled.input`
background-color: white;
border: none;
outline: none;
width: 80px;
font-family: Eregular;
font-size: 20px;
color: var(--dark);
border-radius: 20px;
box-shadow: 0px 0px 3px 1px var(--dark);
text-align: center;
padding: 4px 9px;
margin-left: 10px;
@media (max-width: 520px) {
  font-size: 16px;
}
`

const Button = styled.button`
margin-left: 15px;
width: 80px;
padding: 6px 11px;
background-color: unset;
font-size: 20px;
color: var(--dark);
box-shadow: 0px 0px 3px 1px var(--dark);
border: none;
border-radius: 8px;
cursor: pointer;
font-family: Ebold;
transition: .4s;
&:hover{
  width: 150px;
  color: var(--light);
}
@media (max-width: 520px) {
  font-size: 16px;
}
`
const Theme = styled.div`
position: absolute;
top:20vh;
left:30px;
display: grid;
gap:7px;
`

const Red = styled.button`
width: 28px;
height: 28px;
border-radius: 50%;
background-color: tomato;
border: 1px solid var(--light);
cursor: pointer;
transition: .4s;
&:hover{
  transform: scale(1.05)
}
`
const Green = styled.button`
width: 28px;
height: 28px;
border-radius: 50%;
background-color: mediumseagreen;
border: 1px solid var(--light);
cursor: pointer;
transition: .4s;
&:hover{
  transform: scale(1.05)
}
`
const Blue = styled.button`
width: 28px;
height: 28px;
border-radius: 50%;
background-color: dodgerblue;
border: 1px solid var(--light);
cursor: pointer;
transition: .4s;
&:hover{
  transform: scale(1.05)
}
`
const Purple = styled.button`
width: 28px;
height: 28px;
border-radius: 50%;
background-color: slateblue;
border: 1px solid var(--light);
cursor: pointer;
transition: .4s;
&:hover{
  transform: scale(1.05)
}
`
const Cyan = styled.button`
width: 28px;
height: 28px;
border-radius: 50%;
background-color: cyan;
border: 1px solid var(--light);
cursor: pointer;
transition: .4s;
&:hover{
  transform: scale(1.05)
}
`


export { Logo, Nav, Navs, Hnavs, Svg, Button, Input, InputCont, Reset, SVG, Count, Counter, Head, Body, Svgbtn, Theme,Red, Green, Blue, Purple, Cyan }