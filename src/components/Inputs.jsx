import styled from "styled-components";
import { fonts, rootColors } from "../helpers/constant";
import { layout } from "../helpers/constant";

const { mobile, tablet, laptop, desktop} = layout


const { poppinsRegular } = fonts

export const Input = styled.input`
    width: 100%;
    color: ${rootColors.headingBlack};
    border-radius: 10px;
    outline: none;
    padding-left: 25px;
    padding-right: 25px;
    padding-block:30px;
    font-family: ${fonts.montSerratRegular};
    border: ${props => props.err ? '1px solid red' : '1px solid var(--inputBorder)'};
    &:hover, &:focus{
        border-color:${props => props.err ? 'red' : 'var(--paragraphBlack)'};
    }
    
    @media only screen and (min-width: ${mobile }) {
        padding-left: 10px;
        padding-right: 10px;
        padding-block:15px;
        font-size:14px !important;
    } 
    
    @media only screen and (min-width: ${tablet }) {
        padding-left: 13px;
        padding-right: 13px;
        padding-block:15px;
        font-size:16px !important;
    } 
    
    @media only screen and (min-width: ${laptop }) {
        padding-left: 20px;
        padding-right: 20px;
        padding-block:20px;
        font-size:18px !important;
    } 
    
`

export const TextArea = styled.textarea`
    width: 100%;
    resize:none;
    color: ${rootColors.headingBlack};
    border-radius: 10px;
    outline: none;
    padding-left: 25px;
    padding-right: 25px;
    padding-block:30px;
    font-family: ${fonts.montSerratRegular};
    border: ${props => props.err ? '1px solid red' : '1px solid var(--inputBorder)'};
    &:hover, &:focus{
        border-color:${props => props.err ? 'red' : 'var(--paragraphBlack)'};
    }

    @media only screen and (min-width: ${mobile}) {
        padding-left: 10px;
        padding-right: 10px;
        padding-block:15px;
        font-size:14px !important;
    } 
    
    @media only screen and (min-width: ${tablet}) {
        padding-left: 13px;
        padding-right: 13px;
        padding-block:15px;
        font-size:16px !important;
    } 
    
    @media only screen and (min-width: ${laptop }) {
        padding-left: 20px;
        padding-right: 20px;
        padding-block:20px;
        font-size:18px !important;
    } 
    
    
`

export const InputIcon = styled.input`
    width: 100%;
    max-width:384px;
    height:45px;
    background:url(${({ isIcon }) => isIcon ? isIcon : ""});
    background-repeat:no-repeat;
    background-size:16px;
    background-position-x: 95%;
    background-position-y: center;
    color: var(--backgroundGrey);
    border-radius: 0px;
    outline: none;
    font-size: 16px;
    padding-left: ${({lefIcon }) => lefIcon ? "48px" : "16px"};
    padding-right: ${({ rightIcon }) => rightIcon ? "48px" : "16px"};
    font-family: ${poppinsRegular};
    border: 1px solid var(--backgroundGrey);
    &:hover,&:focus{
        border-color: #1f1f1f;
    }
    
`

export const Error = styled.div`
    width: inherit;
    color: red;
    font-size: .8em;
    text-align:left;
    padding-right: 2px;
    font-family: ${fonts.montSerratRegular};
    `

export const Label = styled.label`
    font-family: ${fonts.montSerratSemibold};
    color:var(--headingBlack);
    
    
    @media only screen and (min-width: ${mobile}) {
        font-size:14px;
    } 
    
    @media only screen and (min-width: ${tablet}) {
        font-size:16px;
    } 
    
    @media only screen and (min-width: ${laptop }) {
        font-size:18px;
    } 

`