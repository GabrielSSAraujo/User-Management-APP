import axios from "axios";

const UserBaseService = "http://localhost:8000";

const APIUser = axios.create({
    baseURL: UserBaseService,
    headers: {
        "Access-Control-Allow-Origin": "localhost",
    },
});

export {APIUser}