import styled from "styled-components";
import { fontSize, colors } from "../../defaultStyles";

const StyledHeaderTable = styled.tr`
    width: 35rem;
    display: flex;
    font-weight: bold;
    font-size: ${fontSize.sizeLg};
    text-align:left;
    background: ${colors.inputColor};
    margin-top:-3px;
    
    td{
        padding:0.3rem 1rem;
    }

    td:first-child{
        width:30%;
    }
    td:nth-child(2){
        width:40%;
    }
    td:last-child{
        width:30%;
    }
`;

export { StyledHeaderTable }