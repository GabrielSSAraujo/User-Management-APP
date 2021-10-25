import styled from "styled-components";
import {colors} from '../../defaultStyles';


const StyledDivUserInfo = styled.div`
margin-top:-2px;
height:10rem;
overflow-y: scroll;
`;

const StyledInfoUserTable = styled.table`
width: 35rem;
background-color: ${colors.inputColor};

`;


export {StyledInfoUserTable, StyledDivUserInfo}