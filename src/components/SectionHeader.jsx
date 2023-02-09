import React from 'react'
import styled from 'styled-components'
import { BoxHeading, InnerHeading } from './Headings'
import { H3, P3 } from './Typography'

const HeadingBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:${({ style: { contentJustify } }) => contentJustify ? contentJustify : 'center'};
    text-align:${({ style: { contentJustify } }) => contentJustify ? contentJustify : 'center'};
    margin-bottom:${({ style }) => style.bottom ? style.bottom : '5.5vw'};
    
    .boxHeading{
        max-width:${({ style }) => style.headingWidth ? style.headingWidth : '400px'};
        margin-bottom:2.2vw;
    }
    
    h3{
        margin-bottom:2vw;
    }
    
    .p3{
        max-width:${({ style }) => style.paraWidth ? style.paraWidth : '1334px'};
        line-height:1.7em;
    }
`

function SectionHeader({ mainHeading, heading, secondHeading, para, boxStyle }) {
    return (
        <HeadingBox style={boxStyle ? boxStyle : {}}>
            <BoxHeading className="boxHeading">{mainHeading}</BoxHeading>
            <H3>
                {heading}
                {InnerHeading && <InnerHeading>{secondHeading}</InnerHeading>}
            </H3>
            <P3 className='p3'>{para}</P3>
        </HeadingBox>
    )
}

export default SectionHeader