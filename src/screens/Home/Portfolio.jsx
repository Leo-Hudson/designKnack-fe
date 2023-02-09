import React from 'react'
import { ContentBox, Section } from "../../components/Banners"
import { H3 } from "../../components/Typography"
import styled from "styled-components"
import { BoxHeading } from '../../components/Headings'
import { rootColors } from '../../helpers/constant'
import blueTexture from '../../assets/backgrounds/blue_texture.webp'
import portfolio1 from '../../assets/images/1.webp'
import portfolio2 from '../../assets/images/2.webp'
import portfolio3 from '../../assets/images/3.webp'
import portfolio4 from '../../assets/images/4.webp'
import portfolio5 from '../../assets/images/5.webp'
import portfolio6 from '../../assets/images/6.webp'
import portfolio7 from '../../assets/images/7.webp'
import portfolio8 from '../../assets/images/8.webp'
import portfolio9 from '../../assets/images/9.webp'

const PortfolioSection = styled(Section)`
    display:grid;
    grid-template-rows:75% 1fr;
    `

const Content = styled.div`
    z-index:1;
    position:relative;
    padding-block: 116px 54px;
    display:flex;
    flex-direction:column;
    align-items:center;

    .boxheading{
        max-width:250px;
        background: rgba(53, 122, 200, 30%);
        color: ${rootColors.white};
        margin-bottom: 2.2vw;
    }
    h3{
        text-align:center;
        color: ${rootColors.white};
        margin-bottom: 5vw;
    }    
`

const PortFolioImages = styled.div`
    min-height:500px;
    background:${rootColors.white};
    padding:3.5vw 2.5vw;
    box-shadow:0px 5px 35px rgba(0, 0, 0, 0.102);
    border-radius:15px;
    
    ul{
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        gap:2.5vw;
        
        li{
            border-radius:15px;
            width:100%;
            overflow:hidden;
            img{
                width:100%;
                height:100%;
                transition:var(--transition03s);
            }
            img:hover{
                transition:var(--transition03s);
                transform:scale(1.3);
            }
        }

    }

`

function Portfolio() {
    return (
        <PortfolioSection>
            <Section bgImage={blueTexture}>
                <ContentBox>
                    <Content>
                        <BoxHeading className='boxheading'>PORTFOLIO</BoxHeading>
                        <H3>Our Featured Work</H3>
                        <PortFolioImages>
                            <ul>
                                <li>
                                    <img src={portfolio1} alt="" width="" height="" />
                                </li>
                                <li>
                                    <img src={portfolio2} alt="" width="" height="" />
                                </li>
                                <li>
                                    <img src={portfolio3} alt="" width="" height="" />
                                </li>
                                <li>
                                    <img src={portfolio4} alt="" width="" height="" />
                                </li>
                                <li>
                                    <img src={portfolio5} alt="" width="" height="" />
                                </li>
                                <li>
                                    <img src={portfolio6} alt="" width="" height="" />
                                </li>
                                <li>
                                    <img src={portfolio7} alt="" width="" height="" />
                                </li>
                                <li>
                                    <img src={portfolio8} alt="" width="" height="" />
                                </li>
                                <li>
                                    <img src={portfolio9} alt="" width="" height="" />
                                </li>
                            </ul>

                        </PortFolioImages>

                    </Content>
                </ContentBox>
            </Section>
            <Section>
            </Section>

        </PortfolioSection>
    )
}

export default Portfolio
