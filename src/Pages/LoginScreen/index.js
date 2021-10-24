import React from "react";
import { StyledDivLogin } from "./style";

const LoginScreen = () =>{
    return(
        <StyledDivLogin>
            <div>Teste</div>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password"/>
            
        </StyledDivLogin>
    )
}

export default LoginScreen;