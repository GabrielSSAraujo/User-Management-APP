import React from "react";
import HeaderTable from "../HeaderTable";
import MapUserInfo from "../MapUserInfo";

const OpenList = ({trigger, users})=>{
    return trigger? (
        <>
            <thead className="listUsers">
                <HeaderTable/>
            </thead>
            <MapUserInfo users = {users}/>
        </>
    ):("");
}

export default OpenList;