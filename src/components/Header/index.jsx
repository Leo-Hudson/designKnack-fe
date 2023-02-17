import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { fonts, layout, rootColors } from '../../helpers/constant'
import logo from '../../assets/logo/logo.svg'
import { ContentBox } from '../Banners'
import { PrimaryButton } from '../Buttons'
import { P3 } from '../Typography'
import { primaryMail, primaryPhone, facebook, instagram, linkedinIn, youtube, menuIcon } from '../../assets/icons'

const { mobile, tablet, laptop, desktop } = layout

const HeaderSection = styled.div`
  min-height:14px;
  max-height:100px;
  position:relative;
  z-index:2;
  margin-bottom:-100px;

`
const Top = styled.div`
  background: ${rootColors.secondary};
    .topContent{
      min-height:45px;
      padding-block:1vw;
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:2vw;
 
      .leftSide{
        display:flex;
        align-items:center;
        gap:1.5vw;
        
        div{
          display:flex;
          align-items:center;
          gap:.5vw;
          
          p{
            color:white;
          }
          img{
            width:clamp(15px, 1.5vw, 24px);
          }
        }
      }
      .rightSide{
        display:flex;
        align-items:center;
        gap:1.7vw;
        
        img{
          height:clamp(15px, 2vw, 20px);
        }
      }
    }
    
    @media only screen and (min-width: ${mobile}) {
      .topContent{
        .leftSide div p{
         display:none;
        }
        .leftSide div img{
          width:auto;
          height:clamp(15px, 2vw, 20px);
        }
        .rightSide{
          gap:10px;
        }
      }
    }  
    @media only screen and (min-width: ${tablet}) {
      .topContent{
        .leftSide div p{
          display:initial;
        }
        .leftSide div img{
          height:initial;
        }
        .rightSide{
          gap:1.5vw;
        }
      }
    }
`

const Bottom = styled.div`
    position:relative;
    .bottomContent{
      display:grid;
      grid-template-columns: auto 1fr;
      gap:2vw;
      place-items:center;
      padding-block:10px;
      background:transparent;


      .logo{
        width:clamp(200px, 19vw ,370px);
      }

      
      .hamburger{
        display:none;
      }

      @media only screen and (max-width: ${layout.laptop}) {
        .hamburger{
          position:relative;
          z-index:2;
          display:initial;
          margin-inline:auto 0px;
        }
      }
    }
  `

  const Menu = styled.ul`
    width:100%;
    display:flex;
    justify-content:right;
    align-items:center;
    gap: 2.5vw;
    font-family:${fonts.montSerratMedium};
    font-size:clamp(16px, 1.2vw, 20px);

    li{
      text-align:center;
    }
    span{
      cursor:pointer;
      padding-bottom:5px;
      border-bottom:2px solid transparent;
    }
    span:hover{
      color:${rootColors.secondary};
      border-bottom:2px solid ${rootColors.secondary};
    }

    a{
      color:${rootColors.headingBlack};
      padding-bottom:5px;
      border-bottom:2px solid transparent;
    }
        
    a:hover, .active{
      color:${rootColors.secondary};
      border-bottom:2px solid ${rootColors.secondary};
    }

    @media only screen and (max-width: ${layout.laptop}) {
      position:fixed;
      height:100dvh;
      top:0px;
      /* background:linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 90%); */
      background: rgba(255,255,255,1);
      flex-direction:column;
      /* align-items:flex-end; */
      margin-top:45px;
      right:${({isMenuOpen}) => isMenuOpen ? '0%' : '-100%'};
      padding-inline:0px 20px;
      padding-block:10vh;
      animation-name:${({ isMenuOpen }) => { 
      return isMenuOpen === true ? 'slideIn' 
        : isMenuOpen === false ? 'slideOut'
          : "";
      }};
      animation-duration:.5s;
      animation-timing-function: ease-out;

      @keyframes slideIn {
        0%{
          display:initial;
          opacity:0;
          right:-100%;
        }
        100%{
          opacity:1;
          right:0%;
        }
      }
      @keyframes slideOut {
        0%{
          opacity:1;
          right:0%;
        }
        100%{
          opacity:0.5;
          display:none;
          right:-100%;
        }
      }
          
      a:hover, .active{
        color:${rootColors.secondary};
        border-bottom:2px solid transparent;
      }
      span:hover{
        border-bottom:2px solid transparent;
      }
    }
  `

const SubMenus = styled.ul`
    width:286px;
    position:absolute;
    padding:15px 13px;
    background:${rootColors.white};
    border-radius:10px;
    display:flex;
    flex-direction:column;
    gap:16px;
    margin-top:10px;
    border-bottom:8px solid ${rootColors.secondary};
    /* display:none; */
    
    
    a{
      font-size:clamp(14px, .8vw, 18px);
      color:${rootColors.headingBlack};
      padding-bottom:5px;
      /* border-bottom:2px solid transparent; */
    }
        
    a:hover, .active{
      color:${rootColors.secondary};
      /* border-bottom:2px solid ${rootColors.secondary}; */
    }
    
    @media only screen and (max-width: ${layout.laptop}) {
      position:initial;
      border-bottom:0px solid transparent;
      margin-inline:auto;
    }
`
function Header() {
  
  const [isService, setService] = useState(false)
  const [isOpen, setIsOpen] = useState("")

  const setDefault = (dt) => {
    dt === 'desktop' ? setService(false) : setService(!isService) ;
    isOpen && setIsOpen(false);

  }

  return (
    <HeaderSection>
      <nav>
        <Top>
          <ContentBox className='topContent'>
            <div className='leftSide'>
              <div>
                <img src={primaryPhone} alt="" width="" height="" />
                <P3><a href="">123-456-7890</a></P3>
              </div>
              <div>
                <img src={primaryMail} alt="" width="" height="" />
                <P3><a href="">info@designknacks.com</a></P3>
              </div>
            </div>
            <div className='rightSide'>
              <img src={facebook} alt="Facebook Icon" width="" height="" />
              <img src={instagram} alt="Instgram Icon" width="" height="" />
              <img src={linkedinIn} alt="LinkedIn Icon" width="" height="" />
              <img src={youtube} alt="YouTube Icon" width="" height="" />
            </div>

          </ContentBox>
        </Top>

        <Bottom>
          <ContentBox className='bottomContent'>
            <NavLink to={"/"}>
              <img src={logo} alt="" width={""} height={"auto"} className='logo' />
            </NavLink>
            <Menu isMenuOpen={isOpen}>
              <li onClick={() => setDefault("desktop")}>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <span onClick={() => setService(!isService)}>Services</span>
                {
                  isService && <SubMenus>
                    <li className='subLink' onClick={() => setDefault()}>
                      <NavLink to='/web-app-development'>Web App Development</NavLink>
                    </li>
                    <li className='subLink' onClick={() => setDefault()}>
                      <NavLink to='/mobile-app-development'>Mobile App Development</NavLink>
                    </li>
                    <li className='subLink' onClick={() => setDefault()}>
                      <NavLink to='/front-end-development'>Front End Development</NavLink>
                    </li>
                    <li className='subLink' onClick={() => setDefault()}>
                      <NavLink to='/hire-dedicated-developers'>Hire Dedicated Developers</NavLink>
                    </li>
                  </SubMenus>
                }
                {/* <NavLink to={"/services"}>Services</NavLink> */}

              </li>
              <li onClick={() => setDefault("desktop")}>
                <NavLink to={"/how-we-work"}>How We Work</NavLink>
              </li>
              <li onClick={() => setDefault("desktop")}>
                <NavLink to={"/contact-us"}>Contact Us</NavLink>
              </li>
              <li>
                <PrimaryButton>GET A QUOTE</PrimaryButton>
              </li>
            </Menu>
            <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
              <img src={menuIcon} alt="" width="" height="" />
            </div>
          </ContentBox>
        </Bottom>

      </nav>
    </HeaderSection >
  )
}

export default Header