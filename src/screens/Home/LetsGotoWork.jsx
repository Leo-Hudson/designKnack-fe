import React from 'react'
import { ContentBox, Section } from "../../components/Banners"
import { H2, H4, P3 } from "../../components/Typography"
import styled from "styled-components"
import { PrimaryButton } from '../../components/Buttons'
import blue_gradient from '../../assets/backgrounds/blue_gradient.jpg'
import { arrowForward } from '../../assets/icons'
import { rootColors } from '../../helpers/constant'


const Content = styled.div`
    width:90%;
    max-width:1080px;
    color:white;
    text-align:center;
    padding-block:86px;
    margin:auto;
    h4{
        font-size:clamp(28px, 1.5vw, 36px);
        font-weight:400;
        margin-bottom:15px;
    }
    h2{
        margin-bottom:26px;
        color:${rootColors.primary};

    }
    p{
        margin-bottom:60px;
        color:${rootColors.white};
        line-height:2em;
    }
    button{
        width:clamp(300px, 20.5vw, 414px);
        display:flex;
        justify-content:center;
        align-items:center;
        gap:10px;
        margin-inline:auto;

        img{
            width:clamp(7px, .5vw, 10px);
        }
    }
`

function LetsGotoWork() {
    return (
        <Section bgImage={blue_gradient}>
            <ContentBox>
                <Content>
                    <div>
                        <H4>Have a Project in Mind?</H4>
                        <H2>Let's Get to Work</H2>
                        <P3>Our team of web experts will help you with your goal of developing a website and will give you all the technical advice in making it engaging and relevant for your business.</P3>
                        <PrimaryButton>
                            GET A QUOTE <img src={arrowForward} alt="" width="" height="" />
                        </PrimaryButton>
                    </div>
                </Content>
            </ContentBox>
        </Section>
    )
}

export default LetsGotoWork
