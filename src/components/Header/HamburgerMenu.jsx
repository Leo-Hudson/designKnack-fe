import styled from "styled-components"

const SlideBox = styled.div`
  position:fixed;
  width:100%;
  height:100vh;
  background:hotpink;
  z-index:999;
  margin-left:-50%;
`

export default function HamburgerMenu() { 
  return <SlideBox />
}