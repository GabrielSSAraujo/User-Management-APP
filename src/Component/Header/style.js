import styled from "styled-components";
import {colors, fontSize} from "../../defaultStyles";

const StyledHead = styled.header`
height:4rem;
background: ${colors.brownBg};
display: flex;
padding: 0.5rem 5%;
justify-content: space-between;
align-items: center;

div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:${colors.white};
    font-size: ${fontSize.sizeLg};
}
a{
    margin-left: 1rem;
    text-decoration: underline;
    cursor: pointer;
}
`;


export {StyledHead}