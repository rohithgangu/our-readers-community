import React,{useRef, useState} from "react";
import { Link } from "react-router-dom";
import {useAuth} from "../context/AuthContext"
function SignUp(){
    

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()


    const {signup} = useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
   async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('password do not match')
        }
        try{
            setError('')
            setLoading(true)
        await signup(emailRef.current.value,passwordRef.current.value)
        }
        catch{
            setError('failed to create an account')
        }
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="enter email id" ref={emailRef} />
                <input type="password" placeholder="create a new password" ref={passwordRef} />
                <input type="password" name="" id="" ref={passwordConfirmRef} placeholder="confirm password"/>
                <button type="submit" disabled={loading} >login</button>
            </form>
            <p>existing user user?</p>
            <Link to={"/LogIn"}>sign up</Link>
        </div>
    )
}

export default SignUp;