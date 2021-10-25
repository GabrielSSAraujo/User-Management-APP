import styled from "styled-components";
import { colors } from "../../defaultStyles";

const StyledBlockFieldsDiv = styled.div`
    width: 35rem;
    padding: 0.5rem 2rem;
    box-sizing: border-box;
    margin-top: -3px;
    height:10rem;
    background:${colors.inputColor};
    display: flex;
    justify-content: space-around;
`;
const StyledButtonDiv = styled.div`
    width: 35rem;
    padding: 0.5rem 2rem;
    box-sizing: border-box;
    height:2rem;
    background:${colors.inputColor};
`;
const StyledBlockFieldsCol1= styled.div`
    display:grid;
    width: 50%;
    justify-items: start;
    font-weight: bold;
    input{
        height: 2rem;
        background: ${colors.white};
        border:none;
        border-radius: 5px;
        padding: 0 1rem;
        color: ${colors.black};
    }
`;
const StyledBlockFieldsCol2 = styled.div`
    display: grid;
    justify-items: start;
    .radio{
        display:grid;
        justify-items: start;
    }
    .inputLabel{
        justify-items: start;
        font-weight: bold;
    }
    input[type=password]{
        height: 2rem;
        width:100%auto;
        background: ${colors.white};
        border:none;
        border-radius: 5px;
        padding-left: 1rem;
        color: ${colors.black};
    }
`;

export {StyledBlockFieldsDiv, StyledBlockFieldsCol1,StyledButtonDiv, StyledBlockFieldsCol2};