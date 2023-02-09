import React from 'react'
import { ContentBox, Section } from "../../components/Banners"
import styled from "styled-components"
import SectionHeader from '../../components/SectionHeader'
import wroldMap from '../../assets/backgrounds/world_map.webp'
import Slider from '../../components/Slider'




const Content = styled.div`
    padding-block:3vw;
`




function Testimonials() {
    return (
        <Section bgImage={wroldMap}>
            <ContentBox>
                <Content>
                    <SectionHeader
                        mainHeading="TESTIMONIALS"
                        heading="Our Clients "
                        secondHeading="Feedback"
                        para="Hear what our satisfied clients have to say about their experience working with us."
                        boxStyle={
                            {
                                bottom: "3.5vw",
                                headingWidth: "260px",
                            }
                        }
                    />
                    <div>
                        <Slider />
                    </div>    
                </Content>

            </ContentBox>
        </Section>
    )
}

export default Testimonials
