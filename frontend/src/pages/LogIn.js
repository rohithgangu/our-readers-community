import React from "react";
import { Link } from "react-router-dom";
function LogIn(){
    const register = async ()=>{

    }
    const login = async ()=>{

    }
    const logout = async ()=>{

    }
    return(
        <div>
            <form action="">
                <input type="text" placeholder="enter email id"/>
                <input type="password" placeholder="enter password" />
                <button type="submit">login</button>
            </form>
            <p>new user?</p>
            <Link to={"/signup"}>sign up</Link>
        </div>
    )
}

export default LogIn;