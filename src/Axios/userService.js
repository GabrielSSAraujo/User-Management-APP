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

export async function getInfoUserLogeded(){
    try{
        const response = await APIUser.get("/user/logeded",{
            headers: {"x-access-token": getToken() }
        });
        return response.data;
    }catch(error){
        console.log(error);
    }
}