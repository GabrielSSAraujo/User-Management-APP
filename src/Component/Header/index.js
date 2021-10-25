import React from "react";
import { StyledHead } from "./style";
import LogoHeader from "../../img/logo-header.png";

const Header = ({name, onclick}) =>{

    return(
        <StyledHead>
            <img src={LogoHeader} alt="logo-header"/>
            <div>
                <p>{name}</p>
                <a onClick={onclick}>Logout</a>
            </div>
        </StyledHead>
    )
}

export default Header;