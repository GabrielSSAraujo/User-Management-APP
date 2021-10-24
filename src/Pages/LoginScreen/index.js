import React from "react";
import { StyledLoginScreen, StyledDivFieldsLogin } from "./style";
import Logo from "../../img/logo.png";
import ActionButton from "../../Component/ActionButton";
const LoginScreen = () =>{
    return(
        <StyledLoginScreen>
            <StyledDivFieldsLogin>
                <img src={Logo}/>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password"/>
                <ActionButton/>
            </StyledDivFieldsLogin>
        </StyledLoginScreen>
    )
}

export default LoginScreen;