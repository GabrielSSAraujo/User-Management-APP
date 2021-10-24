import React, { useState } from "react";
import { StyledLoginScreen, StyledDivFieldsLogin } from "./style";
import Logo from "../../img/logo.png";
import ActionButton from "../../Component/ActionButton";
import { userLogin } from "../../Axios/userService";
import toast, { Toaster } from "react-hot-toast";
import { login, logout } from "../../Auth/auth";
import { history}  from "../../history";

const LoginScreen = () =>{
    const [email, setEmail]= useState("");
    const [password,setPassword] = useState("");

    const handleClickLogin = async (event)=>{
        const response = await userLogin(toast,email,password);
        if(response){
            console.log(response.token);
            history.push("/");
            login(response.token);
        }

    }   

    return(
        <>
            <StyledLoginScreen>
                <StyledDivFieldsLogin>
                    <img src={Logo}/>
                    <input value={email} onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="email" />
                    <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="password"/>
                    <ActionButton onclick={handleClickLogin}/>
                </StyledDivFieldsLogin>
            </StyledLoginScreen>
            <Toaster/>
        </>
    )
}

export default LoginScreen;