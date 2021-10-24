import { APIUser } from "./baseService";
import axios from "axios";
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