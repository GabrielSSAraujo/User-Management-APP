import React from "react";
import { ActionButton } from "../ActionButton";
import { StyledBlockFieldsCol1, StyledBlockFieldsCol2,StyledButtonDiv, StyledBlockFieldsDiv } from "./style";

const BlockFieldsUser = ({
    valueName,
    onChangeName,
    valueEmail,
    onChangeEmail,
    valuePassword,
    onChangePassword,
    onChangeLevel,
    onclickB,
    triggerT,
}) =>{
    return triggerT ? (
        <>
            <StyledBlockFieldsDiv>
                <StyledBlockFieldsCol1>
                    <label>Nome</label>
                    <input type="text" value={valueName} onChange={onChangeName} placeholder="Nome do usuário"/>
                    <label>E-mail</label>
                    <input type="text" value={valueEmail} onChange={onChangeEmail} placeholder="Email"/>
                </StyledBlockFieldsCol1>
                <StyledBlockFieldsCol2>
                    <label className="inputLabel">Nivel de acesso</label>
                    <div className="radio" onChange={onChangeLevel}>
                        <label> <input type="radio" name="level" value="1"/>Administrador</label>
                        <label><input type="radio"  name="level" value="2"/>Usuário</label>
                    </div>
                    <label className="inputLabel" >Senha</label>
                    <input type="password" value={valuePassword} onChange={onChangePassword} placeholder="Senha"/>
                </StyledBlockFieldsCol2>
                
            </StyledBlockFieldsDiv>
            <StyledButtonDiv>
                <ActionButton onclick={onclickB} textValue="Cadastrar"/>
            </StyledButtonDiv>
        </>
    ):'';
}

export default BlockFieldsUser;