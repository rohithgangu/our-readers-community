import React from "react";
import { Link } from "react-router-dom";

function SignUp(){
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
                <input type="password" placeholder="create a new password" />
                <button type="submit">login</button>
            </form>
            <p>existing user user?</p>
            <Link to={"/LogIn"}>sign up</Link>
        </div>
    )
}

export default SignUp;