import { ContentBox, Section } from "../../components/Banners"
import { H1, P3 } from "../../components/Typography"
import styled from "styled-components"
import { PrimaryButton} from "../../components/Buttons"
import bgImage from '../../assets/backgrounds/Contact_us.webp'
import { arrowForward } from "../../assets/icons"
import { layout } from "../../helpers/constant";
import { InnerHeading } from "../../components/Headings"

const { mobile, tablet, laptop, desktop } = layout

const Hero = styled(Section)`
    position:relative;
    display:grid;
    
    .bg{
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
        @media only screen and (min-width: ${mobile}) {
            padding-inline:2px;
        }
        
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
        }
        
        h1{
            margin-bottom:3vw;
        }
    }
    
    button{
        display:flex;
        gap:10px;
        align-items:center;
        justify-content:center;
        width:clamp(260px 21vw, 426px);

        img{
            width:7px;
        }
    }
    
      
    @media only screen and (min-width: ${mobile}) {
        padding-block:180px 10vw;
        .content{
            width: clamp(260px, 85vw , 1000px);
        }
    } 
    @media only screen and (min-width: ${tablet}) {
        padding-block:18vw 10vw;
        .content{
            width: clamp(700px, 55vw , 1000px);
        }
    } 
    @media only screen and (min-width: ${laptop}) {
        padding-block:15vw 10vw;
    } 
`

function BannerSection() {
    return (
        <Hero>
            <img src={bgImage} alt="" className="bg" width="" height="" />
            <Overlay>
                <ContentBox className="contentBox">
                    <div className="content">
                        <H1>REACH OUT TO US, <br /> <InnerHeading>LET'S DISCUSS YOUR PROJECT</InnerHeading></H1>
                        <P3>Are you ready to take your project to the next level? Look no further, reach out to us and let's discuss how we can make it happen. Our team of experts is dedicated to understanding your unique needs and delivering customized solutions.</P3>
                        <PrimaryButton>
                            <span>GET A QUOTE</span>
                            <img src={arrowForward} alt="" width="7px" height="" />
                        </PrimaryButton>
                    </div>
                </ContentBox>
            </Overlay>
        </Hero>
    )
}

export default BannerSection
