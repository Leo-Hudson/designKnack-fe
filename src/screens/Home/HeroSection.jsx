import { ContentBox, Section } from "../../components/Banners"
import { H1, P1 } from "../../components/Typography"
import bgVideo from '../../assets/videos/home_hero_section.webm'
import styled from "styled-components"
import { PrimaryButton, SimpleButton } from "../../components/Buttons"
import bark from "../../assets/logo/bark.webp"
import trustpilot from "../../assets/logo/trustpilot.webp"
import dropbox from "../../assets/logo/dropbox.webp"
import { rootColors } from "../../helpers/constant"
import { arrowForward } from "../../assets/icons"
import { layout } from "../../helpers/constant";

const { mobile, tablet, laptop, desktop } = layout

const Hero = styled(Section)`
    position:relative;
    display:grid;
    
    video{
        position:absolute;
        z-index:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }
    `


const Overlay = styled.div`
    padding-block:12vw 10vw;
    z-index:1;
    width:100%;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 60%);

    .contentBox{
        display:grid;
        place-content:center;
    }

    .content{
        margin-inline:auto;
        width: clamp(700px, 55vw , 1000px);
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        
        p{
            margin-bottom:2vw;
            color:${rootColors.primary};
        }
        
        h1{
            margin-bottom:3vw;
        }
    }
    
    .btnsGroup{
        display:flex;
        gap:3.6vw;
        margin-bottom:7vw;

        button{
            display:flex;
            gap:10px;
            align-items:center;
            justify-content:center;

            img{
                width:7px;
            }
        }
    }
    
    .logoGroup{
        width: clamp(700px, 65vw , 1200px);
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-content:center;
        place-items:center;
        margin-inline:auto;
        gap:10vw;
        img{
            width:100%;
        }
    }
    
    @media only screen and (min-width: ${mobile}) {
        padding-block:180px 10vw;
        .content{
            width: clamp(260px, 85vw , 1000px);
        }
        .logoGroup{
            width: clamp(260px, 85vw , 1200px);
            gap:5vw;
        }
        .btnsGroup{
            flex-direction:column;
        }
    } 
    @media only screen and (min-width: ${tablet}) {
        padding-block:18vw 10vw;
        .content{
            width: clamp(700px, 55vw , 1000px);
        }
        .logoGroup{
            width: clamp(700px, 65vw , 1200px);
        }
        .btnsGroup{
            flex-direction:initial;
        }

    } 
    @media only screen and (min-width: ${laptop}) {
        padding-block:15vw 10vw;
    } 
`

function HeroSection() {
    return (
        <Hero>
            <video src={bgVideo} autoPlay muted loop />
            <Overlay>
                <ContentBox className="contentBox">
                    <div className="content">
                        <P1>Experience The Best IT Services</P1>
                        <H1>YOUR IT SOLUTION PARTNER FOR YOUR BUSINESS</H1>
                        <div className="btnsGroup">
                            <PrimaryButton>
                                <span>HAVE AN IDEA, LET'S TALK</span>
                                <img src={arrowForward} alt="" width="" height=""/>
                            </PrimaryButton>
                            <SimpleButton>GET A QUOTE</SimpleButton>
                        </div>
                    </div>
                    <div className="logoGroup">
                        <img src={trustpilot} alt="" width="" height="auto" />
                        <img src={bark} alt="" width="" height="auto" />
                        <img src={dropbox} alt="" width="" height="auto" />
                    </div>
                </ContentBox>
            </Overlay>
        </Hero>
    )
}

export default HeroSection
