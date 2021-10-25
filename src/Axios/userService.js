import { APIUser } from "./baseService";
import axios from "axios";
import {TOKEN} from "../Auth/auth"
function getToken() {
    return String(localStorage.getItem(TOKEN));
  }

  
export async function userLogin(toast,email,password){
    try{
        const token = `${email}:${password}`;
        const encodedToken = Buffer.from(token).toString('base64');
        const header = "Basic " + encodedToken;
        const response = await APIUser.get("/login", {
        headers: {"Authorization": header}
        });

        toast.success("Login realizado com sucesso!");
        return response.data;
    }catch(error){
        toast.error("Erro: confira suas credenciais!");
    }
}

export async function getInfoUserLogeded(toast){
    try{
        const response = await APIUser.get("/user/logeded",{
            headers: {"x-access-token": getToken() }
        });
        return response.data;
    }catch(error){
        console.log(error);
        toast.error("Usuário sem permissão de administrador");
    }
}

export async function getAllUsers(){
    try{
        const response = await APIUser.get("/user/listAll",{
            headers: {"x-access-token": getToken()}
        });
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export async function createUser(toast,user){
    try{
        const response = await APIUser.post("/register",user,{
            headers: {"x-access-token": getToken()}
        })
        toast.success("Usuário cadastrado com sucesso");
    }catch(error){
        toast.error("Erro ao cadastrar usuário, verifique os campos!")
    }


}