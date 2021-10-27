import React, { useEffect, useState } from "react";
import { ActionBigButton } from "../../Component/ActionButton";
import Header from "../../Component/Header";
import { StyledDiv } from "./style";
import { createUser, getAllUsers, getInfoUserLogeded } from "../../Axios/userService";
import { logout } from "../../Auth/auth";
import OpenList from "../../Component/OpenList";
import toast, { Toaster } from "react-hot-toast";
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
    const [trigger, setTrigger] = useState(false);
    const [triggerT, setTriggerT] = useState(false);

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
        document.location.reload(true);
    }

    async function handleListUsers(){
        if(userLevel!=1){
            toast.error("Você nao possui persissão de administrador");
        }else{
            const users = await getAllUsers(toast);
            setUsers(users);
            triggerT ? setTriggerT(false) : setTriggerT(true);
        }
       
    }

    function handleInsertUser(){
        if(userLevel!=1){
            toast.error("Você nao possui persissão de administrador");
        }else{
            trigger ? (setTrigger(false)) : (setTrigger(true));
        }
    }

    async function handleCreateUser(){
        if(userLevel!=1){
            toast.error("Você nao possui persissão de administrador");
        }else{
            const newUser = {
                name:infoName,
                email:infoEmail,
                password: infoPassword,
                level:infoLevel,
            }
            await createUser(toast,newUser);
        }
        
    }

    return(
        <>
            <Header name={userName} onclick={handleLogout}/>
            <StyledDiv>
                <p>Olá, {userName}</p>
                <span>Seu email é: {userEmail}</span>
                <span>Seu nível de acesso é: {userLevelStr}</span>
                <ActionBigButton textValue="Listar usuários" onclick={handleListUsers}/>
                <OpenList trigger={triggerT} users={users}/>
                <ActionBigButton textValue="Cadastrar usuários" onclick={handleInsertUser}/>
                <BlockFieldsUser 
                    triggerT = {trigger}
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