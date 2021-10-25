import styled from "styled-components";
import { colors, fontSize } from "../../defaultStyles";

const StyledActionButton = styled.button`
    color:${colors.brownBg};
    font-weight: bold;
    font-size: ${fontSize.sizeLg};
    background-color: ${colors.buttonBg};
    padding: 0.8rem 3.5rem;
    border:none;
    border-radius: 7px;
    cursor: pointer;
`;

const StyledActionBigButton = styled.button`
    color:${colors.brownBg};
    font-weight: bold;
    font-size: ${fontSize.sizeLg};
    background-color: ${colors.buttonBg};
    width:35rem;
    padding: 1rem 2rem;
    border:none;
    border-radius: 7px;
    cursor: pointer;
    margin-top:1rem;
`;

export {StyledActionButton, StyledActionBigButton}