import React,{useRef, useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext"

function LogIn(){
    

    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    const {login} = useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
   async function handleSubmit(e){
        e.preventDefault()
        try{
            setError('')
            setLoading(true)
        await login(emailRef.current.value,passwordRef.current.value)
        navigate("/PrivateHome")
        }
        catch{
            setError('failed to sign in')
        }
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit} className="loginform">
                <input type="text" placeholder="enter email id" ref={emailRef} className=""/>
                <input type="password" placeholder="create a new password" ref={passwordRef} className="" />
                <button type="submit" disabled={loading} className="" >log in</button>
            </form>
            <p>new user?</p>
            <Link to={"/SignUp"}>sign up</Link>
        </div>
    )
}

export default LogIn;