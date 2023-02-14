import styled from "styled-components";
import { H6 } from "./Typography";
import { fonts, rootColors } from "../helpers/constant";
import { layout } from "../helpers/constant";

const { mobile, tablet, laptop, desktop } = layout


export const BoxHeading = styled(H6)`
    font-family:${fonts.montSerratMedium};
    border-radius:10px;
    background: rgba(53, 122, 200, 15%);
    padding:1vw 2vw;
    color: ${rootColors.primary};
    text-align:center;
    font-weight:400;
    @media only screen and (min-width: ${mobile}) {
        padding:10px 20px;
    }   
    @media only screen and (min-width: ${mobile}) {
        padding:15px 30px;
    }   
    @media only screen and (min-width: ${desktop}) {
        padding:19px 38px;
    }   
`

export const InnerHeading = styled.span`
    color: ${({color}) => color ? color : rootColors.primary};
`