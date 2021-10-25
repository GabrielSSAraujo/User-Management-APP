import React from "react";
import { UserInfoBlock } from "../UserInfoBlock";

const MapUserInfo = ({users}) =>{
    return(
        <>
            {users.map((userMap)=>
                <UserInfoBlock user={userMap}/>
            )}
        </>
    )
}

export default MapUserInfo;