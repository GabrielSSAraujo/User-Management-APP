import styled from "styled-components";
import { colors, fontSize } from "../../defaultStyles";
const StyledDiv = styled.div`
    height: 100vh;
    text-align:center;
    margin-top:-6rem;
    display: grid;
    align-content: center;
    justify-items: center;

    p{
        color:${colors.brownBg};
        font-weight: bold;
        font-size: ${fontSize.sizeXLg};
        margin-bottom: 0%;
    }
    span:last-child{
        margin: 0 0 2rem 0;
        font-size: ${fontSize.sizeSm};
    }
`;

export {StyledDiv}