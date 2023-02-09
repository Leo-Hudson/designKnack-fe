import React from 'react'
import { ContentBox, Section } from "../../components/Banners"
import styled from "styled-components"
import SectionHeader from '../../components/SectionHeader'
import squareBoxes from '../../assets/backgrounds/square_boxes.webp'
import { circleItalicLines, dots } from '../../assets/icons'
import { ideation, design, test, launch, one, two, three, four } from '../../assets/icons'
import processLine from '../../assets/images/process_line.svg'
import { H5, P6 } from '../../components/Typography'
import { rootColors } from '../../helpers/constant'


const HowWeWorkSection = styled(Section)`
    position:relative;
    padding-bottom:220px;

    .circleLine{
        width:clamp(100px, 11vw, 219px);
        position:absolute;
        top:2vw;
        right:4vw;
        z-index:0;
        
    }
    .dots{
        width:clamp(75px, 5vw, 100px);
        position:absolute;
        bottom:9.5vw;
        left: 4vw;
        z-index:1;
    }
 
`

const Content = styled.div`
    position:relative;
    z-index:2;
    padding-block:4vw;
`

const ProcessBox = styled(ContentBox)`
  width:96%;
  position:relative;
  padding:0px;
  margin-inline:auto;
  min-height:500px;
  z-index:3;

  .processLine{
    /* position:absolute; */
  }
`

const ProcessCards = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  gap:20px;
  .card{
    min-height:286px;
    max-width:300px;
    margin-inline:auto;
    border-radius:10px;
    box-shadow: 0px 3px 25px rgba(0,0,0,0.1);
    padding:2.5vw 2vw;
    background:white;
    position:relative;
    transition:var(--transition03s);
    
    .number{
      position:absolute;
      width:clamp(35px, 3vw, 60px);
      right:1vw;
      top:1vw;
    }
    
    div{
      img{
        width:clamp(75px, 5vw, 103px);
        margin-bottom:27px;
        
      }
      h5{
        margin-bottom:20px;
        color:${rootColors.primary};
      }
      p{
        line-height:25px;
        transition:var(--transition03s);
      }
    }

    &:hover{
      background:${rootColors.secondary};
      transition:var(--transition03s);
      div{
        p{
          transition:var(--transition03s);
          color:${rootColors.white};
        }
      }
    }
    
  }

  .one{
    transform:translateY(-280px);
  }
  .two{
    transform:translateY(-140px);
  }
  .three{
    transform:translateY(10px);
  }
  .four{
    transform:translateY(90px);
  }

  @media (max-width: 1368px) {
    .one{
      transform:translateY(-200px);
    }
    .two{
      transform:translateY(-110px);
    }
    .three{
      transform:translateY(0px);
    }
    .four{
      transform:translateY(60px);
    }
  }

  @media (max-width: 1001px) {
    .one{
      transform:translateY(-160px);
    }
    .two{
      transform:translateY(-80px);
    }
    .three{
      transform:translateY(0px);
    }
    .four{
      transform:translateY(50px);
    }
  }

`

function  HowWeWork() {
  return (
    <HowWeWorkSection bgImage={squareBoxes}>
      <img src={circleItalicLines} alt="" className='circleLine' width="" height="" />
      <img src={dots} alt="" className='dots' width="" height="" />
      {/* Content Box */}
      <ContentBox>
        <Content>
          <SectionHeader
            mainHeading="HOW WE WORK"
            heading="Our Working "
            secondHeading="Process"
            para="Our process consists of understanding your needs, planning and designing, testing and launching, with ongoing maintenance and support. We ensure customer satisfaction with regular communication and update throughout the project."
            boxStyle={
              {
                headingWidth: "300px",
                contentJustify: 'left',
              }
            }
          />

        </Content>
      </ContentBox>

      {/* Process Box */}
      <ProcessBox>
        <img src={processLine} alt="processLine" className='processLine' width="100%" height="auto" />
        <ProcessCards>
          <div className='card one'>
            <img src={one} alt="" className='number' width="" height=""/>
            <div>
              <img src={ideation} alt="" width="" height="" />
              <H5>Ideation & Plan</H5>
              <P6>Our expert app developers in USA understand the different needs of different projects. We spend adequate time on research & planning to make your app a success.</P6>
            </div>

          </div>
          <div className='card two'>
            <img src={two} alt="" className='number' width="" height="" />
            <div>
              <img src={design} alt="" width="" height="" />
              <H5>Design & Development</H5>
              <P6>Our expert app developers know what it takes to develop a successful app. A dedicated team of designers is working hard to create a mesmerizing UI for your mobile app.</P6>
            </div>

          </div>
          <div className='card three'>
            <img src={three} alt="" className='number' width="" height="" />
            <div>
              <img src={test} alt="" width="" height="" />
              <H5>Test & Feedback</H5>
              <P6>We run the product through several test cycles to ensure that the app performs seamlessly. Our expert quality assurance engineers test every bit of code before the final release.</P6>
            </div>

          </div>
          <div className='card four'>
            <img src={four} alt="" className='number' width="" height="" />
            <div>
              <img src={launch} alt="" width="" height="" />
              <H5>Launch</H5>
              <P6>Moving to the launch phase, we keep a keen eye on everything so that your users enjoy an memorable experience. Then, we finally launch your app on the Google Play Store or the Apple App Store.</P6>
            </div>
          </div>

        </ProcessCards>


      </ProcessBox>
    </HowWeWorkSection>
  )
}

export default HowWeWork
