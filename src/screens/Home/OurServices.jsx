import React from 'react'
import { ContentBox, Section } from "../../components/Banners"
import { H2, H3, H5, P2, P5 } from "../../components/Typography"
import styled from "styled-components"
import bgServices from "../../assets/backgrounds/services.webp"
import { BoxHeading, InnerHeading } from '../../components/Headings'
import { rootColors } from '../../helpers/constant'
import { frontend, mobileApp, hireDedicated, webApp, triangles, triangle } from '../../assets/icons'

const Services = styled(Section)`
    position:relative;

    .triangles{
        width:clamp(100px, 14vw, 152px);
        position:absolute;
        top:0px;
        z-index:1;
        
    }
    .triangle{
        width:clamp(100px, 14vw, 152px);
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        right:0px;
        z-index:2;
    }
    .blankBox{
        width:100%;
        position:absolute;
        background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255,255,255,0.35) 100%);
        min-height:100px;
        z-index:0;

    }
    
`

const Content = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr;
    place-items:center;
    gap:50px;
    z-index:3;
    position:relative;
    padding-block:8vw;

    .counterContent{
        .boxHeading{
            max-width:275px;
            margin-bottom:2vw;
        }
        h3{
            margin-bottom:3.3vw;
        }
    }
`
const CountBox = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    gap:3.3vw 10%;

    .secondColor{
        color:${rootColors.primary}
    } 

    .item{
        flex:40%;
        h2{
            margin-bottom: 13px;   
            color:${rootColors.primary};
            font-weight:500;
        }
        p{
            color:${rootColors.headingBlack};
        }
    }  
    
`

const CardsBox = styled.div`

    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    gap:3vw 10%;

    .serviceCard{
        flex:45%;
        height:450px;
        border-radius:10px;
        border:1px solid ${rootColors.primary};
        background:${rootColors.white};
        padding-inline:20px;
        padding-block:30px;
        display:flex;
        flex-direction:column;
        justify-content:flex-end;
        overflow:hidden;
        cursor:pointer;

        .secondColor{
            color:${rootColors.secondary};
        }
        
        img{
            width:clamp(85px, 5.5vw, 110px);
            margin-bottom:1.5vw;
        }
        h5{
            color:${rootColors.primary};
            margin-bottom:18px;
            
        }
        
        p{
            visibility:hidden;
            transition:var(--transition03s);
            opacity:0;
            margin-bottom:-150px;
        }

        
    }   
    
    .serviceCard:hover{
        background: ${rootColors.secondary};
        border:1px solid transparent;
        .secondColor{
            color:${rootColors.white};
        }
        p{
            visibility:visible;
            color:${rootColors.white};
            margin-bottom:0px;
            transition:var(--transition03s);
            opacity:1;
        }
        img{
            filter:invert(100%) saturate(0%);
        }
        
    }

    

    
`



function OurServices() {
    return (
        <Services bgImage={bgServices}>
            <img src={triangles} alt="" className='triangles' width="" height="" />
            <img src={triangle} alt="" className='triangle' width="" height="" />
            <div className='blankBox'></div>
            <ContentBox>
                <Content>
                    {/* Counter Box */}
                    <div className='counterContent'>
                        <BoxHeading className='boxHeading'>OUR SERVICES</BoxHeading>
                        <H3>Real Time Dealing in all Professional <InnerHeading>IT Solutions & Services</InnerHeading></H3>
                        <CountBox>
                            <div className='item'>
                                <H2>30+</H2>
                                <P2>Active Clients</P2>
                            </div>
                            <div className='item'>
                                <H2>400+</H2>
                                <P2>Projects Completed</P2>
                            </div>
                            <div className='item'>
                                <H2>10+</H2>
                                <P2>Projects Completed</P2>
                            </div>
                            <div className='item'>
                                <H2>50+</H2>
                                <P2>Professional Teams</P2>
                            </div>
                        </CountBox>
                    </div>
                    {/* Services Cards */}
                    <div>
                        <CardsBox>
                            <div className='serviceCard'>
                                <img src={webApp} alt="" width="" height="" />
                                <H5>Web App <br /><InnerHeading className='secondColor'>Development</InnerHeading></H5>
                                <P5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</P5>
                            </div>
                            <div className='serviceCard'>
                                <div>
                                    <img src={mobileApp} alt="" width="" height="" />
                                    <H5>Mobile App <br /> <InnerHeading className='secondColor'>Development</InnerHeading></H5>
                                </div>
                                <P5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</P5>
                            </div>
                            <div className='serviceCard'>
                                <div>
                                    <img src={frontend} alt="" width="" height="" />
                                    <H5>Front End <br /> <InnerHeading className='secondColor'>Development</InnerHeading></H5>
                                </div>
                                <P5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</P5>
                            </div>
                            <div className='serviceCard'>
                                <div>
                                    <img src={hireDedicated} alt="" width="" height="" />
                                    <H5>Hire Dedicated <br /> <InnerHeading className='secondColor'>Development</InnerHeading></H5>
                                </div>
                                <P5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</P5>
                            </div>
                        </CardsBox>
                    </div>
                </Content>
            </ContentBox>
        </Services>
    )
}

export default OurServices
