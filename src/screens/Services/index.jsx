import React from "react";
import styled from "styled-components";
import { Section } from '../../components/Banners'
import { H1 } from '../../components/Typography'

const Sec = styled(Section)`
   display:grid;
   place-content:center;
   min-height:70vh; 

`

function Services({name}){
    return <Sec>
        <H1>{name}</H1>
    </Sec>
}

export default Services
