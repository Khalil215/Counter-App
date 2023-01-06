import styled from "styled-components"

export default function Footer() {
  return (
    <Foot>
      <div>&#169; KHALIL 2022</div>
    </Foot>
  )
}

const Foot = styled.footer`
position: absolute;
bottom: 0;
padding: 10px;
text-align: center;
width: 100%;
font-family: Ebold;
@media (max-width: 520px) {
  position: relative;
bottom: none;
  margin-top: 100px;
}
`