import React, { useEffect, useState } from "react";
import { ActionBigButton } from "../../Component/ActionButton";
import Header from "../../Component/Header";
import { StyledDiv } from "./style";
import { createUser, getAllUsers, getInfoUserLogeded } from "../../Axios/userService";
import { logout } from "../../Auth/auth";
import MapUserInfo from "../../Component/MapUserInfo";
import toast, { Toaster } from "react-hot-toast";
import HeaderTable from "../../Component/HeaderTable";
import { history } from "../../history";
import BlockFieldsUser from "../../Component/BlockFieldsUser";

const HomePage = ()=>{
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userLevel, setUserLevel] = useState("");
    const [userLevelStr, setuserlevelStr] = useState("");
    const [users, setUsers] = useState([]);

    const [infoName, setInfoName] = useState("");
    const [infoEmail, setInfoEmail] = useState("");
    const [infoPassword, setInfoPassword] = useState("");
    const [infoLevel, setInfoLevel] = useState("");



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
        setUsers(users);
    }

    function handleInsertUser(){
        //history.push("/cadastro-usuario");
    }

    async function handleCreateUser(){
        const newUser = {
            name:infoName,
            email:infoEmail,
            password: infoPassword,
            level:infoLevel,
        }
        await createUser(toast,newUser);
    }

    return(
        <>
            <Header name={userName} onclick={handleLogout}/>
            <StyledDiv>
                <p>Olá, {userName}</p>
                <span>{userLevelStr}</span>
                <ActionBigButton textValue="Listar usuários" onclick={handleListUsers}/>
                <thead className="listUsers">
                    <HeaderTable/>
                </thead>
                    <MapUserInfo users = {users}/>
                <ActionBigButton textValue="Cadastrar usuários" onclick={handleInsertUser}/>
                <BlockFieldsUser 
                    valueName={infoName} 
                    onChangeName={(event)=>{setInfoName(event.target.value)}}
                    valueEmail={infoEmail}
                    onChangeEmail={(event)=>{setInfoEmail(event.target.value)}}
                    valuePassword={infoPassword}
                    onChangePassword={(event)=>{setInfoPassword(event.target.value)}}
                    onclickB={handleCreateUser}
                    onChangeLevel={(event)=>{setInfoLevel(event.target.value)}}
                    />
            </StyledDiv>
            <Toaster/>
        </>
    )
}

export default HomePage;