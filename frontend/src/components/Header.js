import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React,{useState} from "react";
function Header(){
    const [error,setError]=useState("")
    const {currentUser,logout}=useAuth()
    const navigate = useNavigate()
    async function handleLogout(){
        setError(" ")
        try{
            await logout()
            navigate("/LogIn")
        }
        catch{
            setError("failed to logout")
        }
    }
    return(
        <header>
            <i className="fas fa-book fa-2x"></i>
            <h1>our readers community</h1>
{/*             <p>Email:</p>{currentUser.email}
 */}
            <Link to={"/LogIn"}>login</Link>
            <Link to={"/SignUp"}>sign Up</Link>
            <Link to={"/update-profile"}>Update profile</Link>
            <button onClick={handleLogout}>Logout</button>
        </header>
    )
}
export default Header;