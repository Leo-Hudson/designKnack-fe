import styled from "styled-components";
import { layout } from "../helpers/constant";

const { mobile, tablet, laptop, desktop } = layout

export const Section = styled.div`
    /* background:url("https://images.unsplash.com/photo-1675110972343-67d9aaaea396?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"); */
    background:${({ bgColor, bgImage }) => bgColor ? bgColor :
        bgImage ? `url(${bgImage})` :
            "#fff"};
    background-repeat:none;
    background-size:cover;
    /* min-height:600px; */
`

export const ContentBox = styled.div`
    max-width:1600px;
    margin-inline:auto;
    
    @media only screen and (min-width: ${mobile}) {
        padding-inline:10px;
    }
    @media only screen and (min-width: ${tablet}) {
        padding-inline:20px;
    }
    @media only screen and (min-width: ${laptop}) {
        padding-inline:40px;
    }
    @media only screen and (min-width: ${desktop}) {
        padding-inline:40px;
    }
    
`


   