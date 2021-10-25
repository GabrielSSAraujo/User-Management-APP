import React from "react";
import { StyledActionButton, StyledActionBigButton } from "./style";

const ActionButton = ({onclick}) =>{
    return(
        <StyledActionButton onClick={onclick}>
            Entrar
        </StyledActionButton>
    )
}

const ActionBigButton = ({onclick, textValue}) =>{
    return(
        <StyledActionBigButton onClick={onclick}>
            {textValue}
        </StyledActionBigButton>
    )
}

export {ActionButton, ActionBigButton};