import styled from "styled-components";
import { fonts, rootColors } from "../helpers/constant";
import { layout } from "../helpers/constant";

const { mobile, tablet, laptop, desktop } = layout

const Button = styled.button`
    border:none;
    outline:none;
    font-family:${fonts.montSerratMedium};
    font-size:clamp(14px, 1.2vw, 20px);
    cursor:pointer;
`

export const PrimaryButton = styled(Button)`
    padding-inline: 3vw;
    padding-block: 1vw;
    background:${rootColors.primary};
    color:${rootColors.white};
    border-radius: 10px;
    transition:var(--transition03s);
    
    &:hover{
        transition:var(--transition03s);
        background:${rootColors.secondary};

    }

    @media only screen and (min-width: ${mobile}) {
        padding-inline:15px;
        padding-block:10px;
    }
    
    @media only screen and (min-width: ${desktop}) {
        padding-inline:50px;
        padding-block:19px;
    }

`

export const PrimaryIconButton = styled(Button)`
    width:clamp(60px, 4vw, 80px);
    height:clamp(60px, 4vw, 80px);
    display:flex;
    justify-content:center;
    align-items:center;
    background:${rootColors.primary};
    color:${rootColors.white};
    border-radius: 100px;
    transition:var(--transition03s);
    img{
        width:clamp(30px, 2vw, 40px);
    }
    
    &:hover{
        transition:var(--transition03s);
        background:${rootColors.secondary};

    }

`

export const SimpleButton = styled(Button)`
    padding-inline: 3vw;
    padding-block: 1vw;
    background:${rootColors.headingBlack};
    color:${rootColors.white};
    border-radius: 10px;

    @media only screen and (min-width: ${mobile}) {
        padding-inline:15px;
        padding-block:10px;
    } 
    
    @media only screen and (min-width: ${desktop}) {
        padding-inline:50px;
        padding-block:19px;
    }

`