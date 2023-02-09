import styled from "styled-components";
import { H6 } from "./Typography";
import { fonts, rootColors } from "../helpers/constant";


export const BoxHeading = styled(H6)`
    font-family:${fonts.montSerratMedium};
    border-radius:10px;
    background: rgba(53, 122, 200, 15%);
    padding:1vw 2vw;
    color: ${rootColors.primary};
    text-align:center;   
    `

export const InnerHeading = styled.span`
    color: ${({color}) => color ? color : rootColors.primary};
`