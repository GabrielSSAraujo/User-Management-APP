import React from "react";
import { StyledActionButton, StyledActionBigButton } from "./style";

const ActionButton = ({onclick, textValue}) =>{
    return(
        <StyledActionButton onClick={onclick}>
            {textValue? (textValue):("Entrar")}
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