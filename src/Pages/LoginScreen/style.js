import styled from "styled-components";
import {colors, fontSize } from "../../defaultStyles";

const StyledLoginScreen = styled.div`
    background-color: ${colors.brownBg};
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: space-around;
    align-items: center;
`; 

const StyledDivFieldsLogin = styled.div`
    width: 30rem;
    height: 20rem;
    background-color: ${colors.white};
    border-radius: 15px;
    text-align: center;
    
    img{
        width:10rem;
        padding: 2rem 0 1rem;
    }
    input{
        width:80%;
        height:2rem;
        border-radius: 10px;
        margin-bottom: 1rem;
        background-color: ${colors.inputColor};
        border:none;
        padding-left: 1rem;
        font-size: ${fontSize.sizeMd};
        outline: none;
    }
`;

export {StyledDivFieldsLogin, StyledLoginScreen}