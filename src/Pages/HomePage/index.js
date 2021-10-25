import React, { useEffect, useState } from "react";
import ActionButton from "../../Component/ActionButton";
import Header from "../../Component/Header";
import { StyledDiv } from "./style";
import { getInfoUserLogeded } from "../../Axios/userService";
import {logout} from "../../Auth/auth"


const HomePage = ()=>{
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userNivel, setUserNivel] = useState("");

    function handleLogout(){
        logout();
    }

    useEffect(() => {
        async function getInfoUser(){
            const user = await getInfoUserLogeded();
            setUserName(user.userInfo.name);
            setUserEmail(user.userInfo.email);
            setUserNivel(user.userInfo.level);
        }
        getInfoUser();
        
    });

    return(
        <>
            <Header name="Gabriel" onclick={handleLogout}/>
            <StyledDiv>
                <p>Olá, {userName}</p>
            </StyledDiv>
        </>
    )
}

export default HomePage;