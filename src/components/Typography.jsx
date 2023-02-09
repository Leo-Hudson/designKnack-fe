import styled from "styled-components";
import { fonts, rootColors } from "../helpers/constant";

const {
    clashDisplayMedium,
    clashDisplaySemibold,
    montSerratRegular,
    montSerratMedium,
    montSerratSemibold
} = fonts

const H1 = styled.h1`
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : clashDisplaySemibold};;
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(45px, 3.6vw, 70px)"};
    font-weight:600;
    `;

const H2 = styled.h2`
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : clashDisplaySemibold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(40px, 3.1vw, 60px)"};
    font-weight:600;
    `;

const H3 = styled.h3`
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : clashDisplaySemibold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(35px, 2.6vw, 50px)"};
    font-weight:600;
    `;

const H4 = styled.h4`
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : clashDisplayMedium};;
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(30px, 2vw, 44px)"};
    font-weight:500;
    `;

const H5 = styled.h5`
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : clashDisplaySemibold};;
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(22px, 1.3vw, 26px)"};
    font-weight:600;
    `;

const H6 = styled.h6`
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : clashDisplaySemibold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(18px, 1.1vw, 22px)"};
    font-weight:600;
`;

const P1 = styled.p`
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : montSerratSemibold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(30px, 2vw, 44px)"};
    font-weight:600;
    color:${rootColors.paragraphBlack};
    color:${rootColors.paragraphBlack};
`

const P2 = styled.p`
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : montSerratMedium};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(22px, 1.4vw, 28px)"};
    font-weight:500;
    color:${rootColors.paragraphBlack};
    `

const P3 = styled.p`
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : montSerratRegular};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(18px, 1.1vw, 22px)"};
    font-weight:400;
    color:${rootColors.paragraphBlack};
    `

const P4 = styled.p`
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : montSerratRegular};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(16px, 1vw, 20px)"};
    font-weight:400;
    color:${rootColors.paragraphBlack};
    `

const P5 = styled.p`
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : montSerratRegular};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(14px, 0.9vw, 18px)"};
    font-weight:400;
    color:${rootColors.paragraphBlack};
    `

const P6 = styled.p`
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : montSerratRegular};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(13px, 0.8vw, 16px)"};
    font-weight:400;
    color:${rootColors.paragraphBlack};
`

export {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P1,
    P2,
    P3,
    P4,
    P5,
    P6
}