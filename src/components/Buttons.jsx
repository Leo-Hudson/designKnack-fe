import styled from "styled-components";
import { fonts, rootColors } from "../helpers/constant";

const Button = styled.button`
    border:none;
    outline:none;
    font-family:${fonts.montSerratMedium};
    font-size:clamp(16px, 1.2vw, 20px);
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

`

export const PrimaryIconButton = styled(Button)`
    padding-inline:1.2vw;
    padding-block:1.2vw;
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
        width:100%;
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
`