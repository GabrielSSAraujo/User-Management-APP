import React from "react";
import { StyledInfoUserTable, StyledDivUserInfo } from "./style";
import { useState } from "react";

const UserInfoBlock = ({user}) =>{
    
    return(
        <>
            <StyledDivUserInfo>
                <StyledInfoUserTable>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.level==1? ("Administrador"):("Usuário")}</td>
                        </tr>
                </StyledInfoUserTable>
            </StyledDivUserInfo>
        </>
    )
}

export { UserInfoBlock };