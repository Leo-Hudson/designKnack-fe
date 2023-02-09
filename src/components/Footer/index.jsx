import React, { useState } from 'react'
import { ContentBox, Section } from "../../components/Banners"
import { H5, P3 } from "../../components/Typography"
import styled from "styled-components"
import blue_gradient from '../../assets/backgrounds/blue_gradient.jpg'
import { arrowForwardBlue } from '../../assets/icons'
import { americanExpress, brandChinaUnionpay, brandMasterCard, discover, payPal, visa } from '../../assets/logo/brands'
import { instagram, google, linkedinIn, twitter, facebook, youtube, circleArrow } from '../../assets/icons'
import { fonts, rootColors } from '../../helpers/constant'
import { NavLink } from 'react-router-dom'
import { menus } from '../../helpers/constant'


const Content = styled.div`
    .divider{
        height:2px;
        background:${rootColors.grey};
        margin-block:10px;
    }
    
`

const UpperBox = styled.div`
    padding-block:94px 50px;
    display:flex;
    justify-content:left;
    flex-wrap:wrap;
    gap:1.5vw;

    div{
        flex:1;
        min-width:350px;
    }
    h5{
        color:${rootColors.primary}
    }
    
`
const BottomBox = styled.div`
    padding-block:20px;
    display:flex;
    flex:wrap;
    justify-content:space-between;
    gap:50px;

    p{
        color:${rootColors.white}
    }
    .paymentGateway{
        display:flex;
        justify-content:right;
        align-items:flex-end;
        gap:8px;
        img{
            width:clamp(35px, 3vw, 60px);
            height:auto;
        }
    } 
    
`

const Links = styled.ul`
    display:flex;
    flex-direction:column;
    gap:15px;
    padding:20px 10px;

    .contactUsIcons{
        display:flex;
        align-items:center;
        gap:10px;

        img{
            width:15px;
        }
    }
`

const Li = styled.li`
    a:before{
        content: '';
        display: ${({ icon }) => icon ? 'none' : 'inline-block'};
        height: 10px;
        width: 10px;
        background-image: url(${arrowForwardBlue});
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: 0px;
    }
    a{  
        color:${rootColors.white};
        font-size:18px;
        font-family:${fonts.montSerratRegular};
        
    }
    `


const SubscriberBox = styled.div`
    max-width:350px;
    .subscribeNewsletter{
        
        h5{
            margin-bottom:21px;
        }
        margin-bottom:33px;
    }
    
    .followUs{
        h5{
            margin-bottom:22px;
        }
        .socialIcons{
            display:flex;
            align-items:center;
            gap:1vw;

            img{
                width:clamp(25px, 1.5vw, 34px);
                max-height:26px;
            }
            
        }
    }
    
    `

const SubscribeInput = styled.div`
    display:grid;
    grid-template-columns:1.5fr 1fr;
    border:1px solid ${rootColors.white};
    border-radius:27px;
    min-height:clamp(35px, 2.5vw, 55px);
    
    button{
        width:100%;
        outline:none;
        border:none;
        border:1px solid ${rootColors.white};
        border-radius:inherit;
        display:flex;
        padding-inline:10px 5px;
        padding-block:5px;
        justify-content:right;
        align-items:center;
        gap:5px;
        font-family:${fonts.montSerratMedium};
        font-size:clamp(14px, 0.8vw, 17px;);
        background:${rootColors.white};
        margin-block:-1px;
        cursor:pointer;        
        img{
            width:35px;
            height:auto;
        }
    }
    
    input{
        width:100%;
        outline:none;
        border:none;
        border-radius:inherit;
        background:transparent;
        font-family:${fonts.montSerratRegular};
        font-size:14px;
        color:${rootColors.white};
        padding-inline:1.5vw;
    }


`

function Footer() {
    const [quickLinks, setQuickLinks] = useState(menus.quickLinks)
    const [services, setServices] = useState(menus.services)
    const [contactUs, setContactUs] = useState(menus.contactUs)

    return (
        <Section bgImage={blue_gradient}>
            <ContentBox>
                <Content>
                    <UpperBox>
                        {/* Quick Links */}
                        <div>
                            <H5>Quick Links</H5>
                            <Links>
                                {
                                    quickLinks && quickLinks.map(({ name, path }, index) => {
                                        return <Li key={index + name}>
                                            <NavLink to={path} > {name} </NavLink>
                                        </Li>
                                    })
                                }
                            </Links>
                        
                        </div>

                        {/* Services */}
                        <div>
                            <H5>Services</H5>
                            <Links>
                                {
                                    services && services.map(({ name, path }, index) => {
                                        return <Li key={index + name}>
                                            <NavLink to={path} > {name} </NavLink>
                                        </Li>
                                    })
                                }
                            </Links>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <H5>Contact Us</H5>
                            <Links>
                                {
                                    contactUs && contactUs.map(({ name, path, icon }, index) => {
                                        return <Li icon={true} key={index + name} className='contactUsIcons'>
                                            <img src={icon} alt='' width="" height=""/>
                                            <NavLink to={path} key={index}> {name} </NavLink>
                                        </Li>
                                    })
                                }

                            </Links>
                        </div>

                        {/* Subscribe To Our Newsletter and Follow Us on */}
                        <SubscriberBox>
                            <div className='subscribeNewsletter'>
                                <H5>Subscribe To Our Newsletter</H5>
                                <SubscribeInput>
                                    <input type="email" id='newsletterEmail' name='newsletterEmail' placeholder='Enter Email Address*' />
                                    <button>
                                        <span>SUBSCRIBE</span>
                                        <img src={circleArrow} alt="Arrow" width="" height="" />
                                    </button>
                                </SubscribeInput>
                            </div>
                            <div className='followUs'>
                                <H5>Follow Us On:</H5>
                                <div className='socialIcons'>
                                    <img src={youtube} alt="YouTube" width="" height="" />
                                    <img src={facebook} alt="Facebook" width="" height="" />
                                    <img src={twitter} alt="Twitter" width="" height="" />
                                    <img src={linkedinIn} alt="LinkedIn" width="" height="" />
                                    <img src={google} alt="Google" width="" height="" />
                                    <img src={instagram} alt="Instagram" width="" height="" />
                                </div>
                            </div>

                        </SubscriberBox>

                    </UpperBox>
                    <div className='divider'></div>
                    <BottomBox>
                        <P3>Copyright © 2023 - All Right Reserved.</P3>
                        <div className='paymentGateway'>
                            <img src={americanExpress} alt="American Express" width="" height="" />
                            <img src={brandChinaUnionpay} alt="UnionPay" width="" height="" />
                            <img src={brandMasterCard} alt="Mastercard" width="" height="" />
                            <img src={discover} alt="Discover" width="" height="" />
                            <img src={payPal} alt="PayPal" width="" height="" />
                            <img src={visa} alt="Visa" width="" height="" />
                        </div>
                    </BottomBox>

                </Content>
            </ContentBox>
        </Section>
    )
}

export default Footer
