import React from "react";
import { Route,Navigate,useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function PrivateRoute({ Childern }){

    const currentUser=useAuth();
    console.log(currentUser)
    return(
         currentUser ? console.log("true") : console.log("false")
         );

}