import { Link } from "react-router-dom";

import React from "react";
function Header(){
    return(
        <header>
            <i className="fas fa-book fa-2x"></i>
            <h1>our readers community</h1>
            <Link to={"/LogIn"}>login</Link>
        </header>
    )
}
export default Header;