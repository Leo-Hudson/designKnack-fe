import React from 'react';
import { Slide } from 'react-slideshow-image';
import styled from 'styled-components';
import 'react-slideshow-image/dist/styles.css';
import { Rating } from '@mui/material';
import sample1 from '../assets/images/boy2.webp'
import sample2 from '../assets/images/girl1.webp'
import forCardBG from '../assets/backgrounds/for_testimonial_card.svg'
import { arrowLeft, arrowRight, quote } from '../assets/icons';
import { H6, P6 } from './Typography';
import { fonts, rootColors } from '../helpers/constant';
import { PrimaryIconButton } from './Buttons';
import { layout } from "../helpers/constant";

const { mobile, tablet, laptop, desktop } = layout

const SliderBox = styled.div`

    /* .images-wrap .active{
        transition:var(--transition03s);
        transform:translate(10px, -10px);
    } */
    
    .indicators .active {
        color: #fff;
        background: ${rootColors.primary};
        transform:translate(0px, 0px);
    }

    .react-slideshow-container{
        .buttonPrev{
            transform:translateX(-5%);
        }
        .buttonNext{
            transform:translateX(5%);
        }
    }

    @media only screen and (min-width: ${mobile}) {
        .slideBtn{
            display:none;
        }
        
    } 
    
    @media only screen and (min-width: ${tablet }) {
        .slideBtn{
            display:initial;
        }
    } 

`

const Card = styled.div`
    background:${rootColors.white};
    border-radius:10px;
    margin-block:40px;
    position:relative;
    padding-block:3vw 0px;
    display:grid;
    overflow:hidden;
    
    .picture{
        z-index:1;
        width:100%;
        margin-block:auto 0px;
    }

    .forCardBG{
        width:45%;
        position:absolute;
        bottom:0px;
        right:0px;
        z-index:0;
    }
    
    @media only screen and (min-width: ${mobile}) {
        grid-template-rows:minmax(1fr, 100%);
        box-shadow:0px 10px 20px rgba(0, 0, 0, 0.1);
        margin-inline:auto;
        padding-inline:3.5vw;
        grid-template-columns:1fr;
        width:clamp(200px, 75vw, 400px);
        gap:20px;
        
        .picture{
            width:clamp(150px, 70%, 300px);
            max-height:330px;
            object-fit:contain;
            object-position:center;
            margin-inline:auto;
            margin-block:auto;
        }

        .forCardBG{
            width:85%;
            transform:rotate(270deg);
            top:-3vw;
        }
    } 
    
    @media only screen and (min-width: ${"1180px"}) {
        box-shadow:0px .25vw 34px rgba(0, 0, 0, 0.1);
        margin-inline:40px;
        padding-inline:1.5vw;
        grid-template-columns:1fr 1fr;
        grid-template-rows:minmax(23vw, 400px);
        width:initial;
        gap:1.3vw;
        
        .picture{
            width:100%;
            margin-block:auto 0px;
            max-height:initial;
            object-fit:initial;
            object-position:initial;
        }

        .forCardBG{
            width:45%;
            transform:rotate(0deg);
            bottom:0px;
            top:initial;
        }

    } 
    
`

const Indicators = styled.div`
    cursor: pointer;
    text-align: center;
    border: 1px solid ${rootColors.primary};
    margin:0px 3px;
    font-size:0px;
    border-radius:100px;
    
    @media only screen and (min-width: ${mobile}) {
        padding: 3px;
        margin:0px 4px;
        
    } 
    
    @media only screen and (min-width: ${tablet }) {
        padding: 5px;
        margin:0px 3px;
        
    } 

    
`

const Content = styled.div`
    z-index:1;
    padding-bottom:1.5vw;
    margin-block:auto;

    img{
        width:clamp(30px, 4.5vw, 94px);
        margin-bottom:2vw;
    }
    p{
        margin-bottom:2.5vw;
    }
    .personInfoBox{
        h6{
            color:${rootColors.secondary};
            margin-bottom:3px;
        }
        .medium{
            font-family:${fonts.montSerratMedium};
            margin-bottom:1.3vw;
        }
        .rating{
            color:${rootColors.primary};
        }
        @media only screen and (min-width: ${mobile}) {
            display:flex;
            align-items:center;
            gap:3vw;
            margin-bottom:15px;
            .medium{
                margin-bottom:0px;
            }
            .rating{
                span{
                    font-size:18px;
                }
            }
        } 
        
        @media only screen and (min-width: ${laptop}) {
            display:initial;
            margin-bottom:20px;
            .medium{
                margin-bottom:1.3vw;
            }
            .rating{
                span{
                    font-size:1.2rem;
                }
            }
        } 
    }
    
`

const slideImages = [
    {
        url: sample1,
        caption: 'Slide 1'
    },
    {
        url: sample2,
        caption: 'Slide 2'
    },
    {
        url: sample1,
        caption: 'Slide 3'
    },
    {
        url: sample2,
        caption: 'Slide 1'
    },
    {
        url: sample1,
        caption: 'Slide 2'
    },
    {
        url: sample2,
        caption: 'Slide 3'
    },
];

const responsiveSettings = [
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 220,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];

const properties = {
    prevArrow: <PrimaryIconButton className='slideBtn buttonPrev'><img src={arrowLeft} alt="arrow-foward" width="auto" height="100%" /></PrimaryIconButton>,
    nextArrow: <PrimaryIconButton className='slideBtn buttonNext' ><img src={arrowRight} alt="arrow-foward" width="auto" height="100%" /></PrimaryIconButton>
}

const Slider = () => {
    return (
        <SliderBox>
            <Slide
                {...properties}
                slidesToScroll={1}
                slidesToShow={2}
                easing='cubic-out'
                transitionDuration={500}
                autoplay={false}
                indicators={(index) => <Indicators className='indicators'>{index + 1}</Indicators>}
                responsive={responsiveSettings}>

                {slideImages.map((slideImage, index) => (
                    <Card key={index}>
                        <img src={slideImage.url} alt={slideImage.caption} className='picture' width="" height="" />
                        <Content className='content'>
                            <img src={quote} alt={slideImage.caption} width="" height="" />
                            <P6>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings</P6>
                            <div className='personInfoBox'>
                                <div className='titleBox'>
                                    <H6>Alex John</H6>
                                    <P6 className='medium'>CEO of AirWings</P6>
                                </div>
                                <Rating className='rating' name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                            </div>
                        </Content>
                        <img src={forCardBG} alt="Card Background" className='forCardBG' width="" height="" />
                    </Card>
                ))}
            </Slide>
        </SliderBox>
    );
};

export default Slider;
