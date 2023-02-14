import React, { useState } from 'react'
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

  .top{
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
  }
  
  .bottom{
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

      .menu{
        width:100%;
        display:flex;
        justify-content:right;
        align-items:center;
        gap: 2.5vw;
        font-family:${fonts.montSerratMedium};
        font-size:clamp(16px, 1.2vw, 20px);

        a{
          color:${rootColors.headingBlack};
          padding-bottom:5px;
          border-bottom:1px solid transparent;
        }
        
        a:hover, .active{
          color:${rootColors.secondary};
          border-bottom:2px solid ${rootColors.secondary};
        }
        
      }
      .hamburger{
        display:none;
      }

      @media only screen and (max-width: ${layout.laptop}) {
        .menu{
          background:black;
          display:none;
        }
        .hamburger{
          display:initial;
          margin-inline:auto 0px;
        }
      }
    }

    
    
  }

  
`

// const SubMenus = styled.div`
//   position:relative;
  
//   ul{
//     width:346px;
//     position:absolute;
//     background:hotpink;
//     padding:24px 21px;
//     display:flex;
//     flex-direction:column;
//     gap:26px;
//     border-bottom:2px solid ${}
//     /* display:none; */

//   }

// `

function Header() {
  return (
    <HeaderSection>
      <nav>
        <div className='top'>
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
        </div>

        <div className='bottom'>
          <ContentBox className='bottomContent'>
            <NavLink to={"/"}>
              <img src={logo} alt="" width={""} height={"auto"} className='logo' />
            </NavLink>
            <ul className='menu'>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                {/* <SubMenus>
                  <a href="">Services</a>
                  <ul>
                    <li className='subLink'>Web App Development</li>
                    <li className='subLink'>Mobile App Development</li>
                    <li className='subLink'>Front End Development</li>
                    <li className='subLink'>Hire Dedicated Developers</li>
                  </ul>
                </SubMenus> */}
                <NavLink to={"/services"}>Services</NavLink>

              </li>
              <li>
                <NavLink to={"/how-we-work"}>How We Work</NavLink>
              </li>
              <li>
                <NavLink to={"/contact-us"}>Contact Us</NavLink>
              </li>
              <li>
                <PrimaryButton>GET A QUOTE</PrimaryButton>
              </li>
            </ul>
            <div className='hamburger'>
              <img src={menuIcon} alt="" width="" height="" />
            </div>
          </ContentBox>
        </div>

      </nav>
    </HeaderSection >
  )
}

export default Header