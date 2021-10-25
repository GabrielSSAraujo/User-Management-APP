import React, { useEffect, useState } from "react";
import { ActionBigButton } from "../../Component/ActionButton";
import Header from "../../Component/Header";
import { StyledDiv } from "./style";
import { getAllUsers, getInfoUserLogeded } from "../../Axios/userService";
import { logout } from "../../Auth/auth";
import MapUserInfo from "../../Component/MapUserInfo";
import toast, { Toaster } from "react-hot-toast";

const HomePage = ()=>{
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userLevel, setUserLevel] = useState("");
    const [userLevelStr, setuserlevelStr] = useState("");
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        async function getInfoUser(){
            const user = await getInfoUserLogeded();
            setUserLevel(user.userInfo.level);
            userLevel==1 ? setuserlevelStr("Administrador"):setuserlevelStr("Usuário");
            setUserName(user.userInfo.name);
            setUserEmail(user.userInfo.email);
            
        }
        getInfoUser();
    });

    function handleLogout(){
        logout();
    }

    async function handleListUsers(){
        const users = await getAllUsers(toast);
        console.log(users);
        setUsers(users);
    }

    function handleInsertUser(){
        alert("Em implementação");
    }

    return(
        <>
            <Header name="Gabriel" onclick={handleLogout}/>
            <StyledDiv>
                <p>Olá, {userName}</p>
                <span>{userLevelStr}</span>
                <ActionBigButton textValue="Listar usuários" onclick={handleListUsers}/>
                <MapUserInfo users = {users}/>
                <ActionBigButton textValue="Cadastrar usuários" onclick={handleInsertUser}/>
            </StyledDiv>
            <Toaster/>
        </>
    )
}

export default HomePage;