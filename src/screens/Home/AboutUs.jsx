import React from 'react'
import { ContentBox, Section } from "../../components/Banners"
import { H4, P4, P5 } from "../../components/Typography"
import styled from "styled-components"
import SectionHeader from '../../components/SectionHeader'
import { rootColors } from '../../helpers/constant'
import { Rating } from '@mui/material'
import { draftbit, feedly, hellosign, krisp, mapbox, pendo, people_ai, } from '../../assets/logo/brands'
import { PrimaryButton } from '../../components/Buttons'
import { arrowForward, waves, circles } from '../../assets/icons'

const About = styled(Section)`
    position:relative;

    .waves{
        width:clamp(120px, 19vw, 180px);
        position:absolute;
        top:3vw;
        right:4vw;
        z-index:0;
        
    }
    .circles{
        width:clamp(120px, 19vw, 207px);
        position:absolute;
        bottom:0px;
        transform:translate(-45%, 45%);
        z-index:1;
    }
    
`

const Content = styled.div`
    position:relative;
    width:100%;
    padding-block:80px 140px;
    z-index:2;
    
`

const BrandsBox = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    place-items:center;
    gap:50px;
`

const BrandsImage = styled.div`

    ul{
        width:100%;
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        place-items:center;
        gap:30px;

        li{
            padding:15px 30px;
            background: var(--white);
            border-radius:100px;
            filter: drop-shadow(0 24px 99px rgba(205, 205, 205, 0.3));    
            img{
                width:100%;
            }
        }
        
        .corner{
            margin-bottom:-50%;
        }
           
        .blank{
            padding:0px;
            background: transparent;
            /* margin-block:-50px; */
        }
    }
`

const BrandsContent = styled.div`
    text-align:left;
    .ratingBox{
        display:flex;
        align-items:center;
        gap:10px;
        .rating{
            color:${rootColors.primary};
        }
        margin-bottom:21px;
    }
    h4{
        margin-bottom:23px;
    }
    .p4{
        line-height:1.7em;
        margin-bottom:53px;
    }

    button{
        width:clamp(300px, 20.5vw, 414px);
        display:flex;
        justify-content:center;
        align-items:center;
        gap:10px;

        img{
            width:clamp(7px, .5vw, 10px);
        }
    }

`

function AboutUs() {
    return (
        <About>
            <img src={waves} alt="" className='waves' width="" height="" />
            <img src={circles} alt="" className='circles' width="" height="" />
            <ContentBox>
                <Content>
                    {/* {mainHeading, heading, secondHeading, para} */}
                    <SectionHeader
                        mainHeading="GET TO KNOW ABOUT US"
                        heading="Grow Your Business With "
                        secondHeading="DESIGNSKNACK"
                        para="Whether you need a new website, a custom mobile app, or a software solution for your business, we have the expertise and experience to deliver results. Our team will work closely with you to understand your unique needs and goals, and we'll use the latest technologies and best practices to bring your vision to life."
                    />
                    <BrandsBox>
                        {/* Brands Images */}
                        <BrandsImage>
                            <ul>
                                <li className='corner'>
                                    <img src={mapbox} alt="Mapbox" width="" height="" />
                                </li>
                                <li>
                                    <img src={pendo} alt="Pendo" width="" height="" />
                                </li>
                                <li className='corner'>
                                    <img src={feedly} alt="Feedly" width="" height="" />
                                </li>
                                <li className='corner'>
                                    <img src={people_ai} alt="People.Ai" width="" height="" />
                                </li>
                                <li>
                                    <img src={draftbit} alt="Draftbit" width="" height="" />
                                </li>
                                <li className='corner'>
                                    <img src={hellosign} alt="Hellosign" width="" height="" />
                                </li>
                                <li className='blank'>
                                </li>
                                <li>
                                    <img src={krisp} alt="Krisp" width="" height="" />
                                </li>
                                <li className='blank'>
                                </li>
                            </ul>
                        </BrandsImage>

                        {/* Brands Images */}
                        <BrandsContent>
                            <div className='ratingBox'>
                                <P5>Trusted By 1,000+ Clients</P5>
                                <Rating className='rating' name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                            </div>
                                <H4>We are Blessed to Work With Leading Brands</H4>
                                <P4 className='p4'>We are grateful for the opportunity to collaborate with these respected and well-known brands, and we look forward to building long-term relationships with you as well. We are confident that our partnership will bring value to your Business</P4>
                                <PrimaryButton>
                                    GET A QUOTE <img src={arrowForward} alt='arrow_forward' width="" height="" />
                                </PrimaryButton>
                        </BrandsContent>
                    </BrandsBox>

                </Content>
            </ContentBox>
        </About>
    )
}

export default AboutUs
