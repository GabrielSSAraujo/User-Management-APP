import React from "react";
import ActionButton from "../../Component/ActionButton";
import Header from "../../Component/Header";
import { StyledDiv } from "./style";

function handleLogout(){
    alert("sair");
}
const HomePage=()=>{
    return(
        <>
            <Header name="Gabriel" onclick={handleLogout}/>
            <StyledDiv>
                <p>implementar listar user</p>
            </StyledDiv>
        </>
    )
}

export default HomePage;