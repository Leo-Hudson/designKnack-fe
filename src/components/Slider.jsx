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
`

const Card = styled.div`
    background:${rootColors.white};
    border-radius:10px;
    box-shadow:0px .25vw 34px rgba(0, 0, 0, 0.1);
    margin-inline:40px;
    margin-block:40px;
    position:relative;
    padding-inline:1.5vw;
    padding-block:3vw 0px;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:minmax(23vw, 465px);
    overflow:hidden;
    gap:1.3vw;

    .picture{
        z-index:1;
        width:100%;
    }

    .forCardBG{
        width:45%;
        position:absolute;
        bottom:0px;
        right:0px;
        z-index:0;
    }
    
`

const Indicators = styled.div`
    cursor: pointer;
    padding: 5px;
    text-align: center;
    border: 1px solid ${rootColors.primary};
    margin:0px 3px;
    font-size:0px;
    border-radius:100px;

    
`

const Content = styled.div`
    z-index:1;
    padding-bottom:1.5vw;
    img{
        width:clamp(50px, 4.5vw, 94px);
        margin-bottom:2vw;
    }
    h6{
        color:${rootColors.secondary};
        margin-bottom:3px;
    }
    p{
        margin-bottom:2.5vw;
    }
    .medium{
        font-family:${fonts.montSerratMedium};
        margin-bottom:1.3vw;
    }
    .rating{
        color:${rootColors.primary};
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
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
];

const properties = {
    prevArrow: <PrimaryIconButton className='buttonPrev'><img src={arrowLeft} alt="arrow-foward" width="auto" height="100%" /></PrimaryIconButton>,
    nextArrow: <PrimaryIconButton className='buttonNext' ><img src={arrowRight} alt="arrow-foward" width="auto" height="100%" /></PrimaryIconButton>
}

const Slider = () => {
    return (
        <SliderBox>
            <Slide
                {...properties}
                slidesToScroll={1}
                slidesToShow={2}
                easing='cubic'
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
                            <H6>Alex John</H6>
                            <P6 className='medium'>CEO of AirWings</P6>
                            <Rating className='rating' name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                        </Content>
                        <img src={forCardBG} alt="Card Background" className='forCardBG' width="" height="" />
                    </Card>
                ))}
            </Slide>
        </SliderBox>
    );
};

export default Slider;
