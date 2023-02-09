import styled from "styled-components";
import { fonts } from "../helpers/constant";


const { poppinsRegular } = fonts

export const Input = styled.input`
    width: 100%;
    /* max-width:438px; */
    /* height:70px; */
    /* background:url(${({ isIcon }) => isIcon});
    background-repeat:no-repeat;
    background-size:1em;
    background-position-x: 410px;
    background-position-y: center; */
    color: var(--headingBlack);
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
    
    
`

export const TextArea = styled.textarea`
    width: 100%;
    resize:none;
    color: var(--headingBlack);
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
    font-size:20px;
    color:var(--headingBlack);

`