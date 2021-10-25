import styled from "styled-components";
import {colors} from '../../defaultStyles';


const StyledDivUserInfo = styled.div`
margin-top:-2px;
text-align:left;

`;

const StyledInfoUserTable = styled.table`
width: 35rem;
background-color: ${colors.inputColor};

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


export {StyledInfoUserTable, StyledDivUserInfo}