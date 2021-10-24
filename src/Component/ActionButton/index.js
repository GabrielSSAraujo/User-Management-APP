import React from "react";
import { StyledActionButton } from "./style";

const ActionButton = ({onclick}) =>{
    return(
        <StyledActionButton onClick={onclick}>
            Entrar
        </StyledActionButton>
    )
}

export default ActionButton;