import React,{useState} from "react";

import SearchArea from "./SearchArea";
import axios from "axios";
import request from "superagent";


function Books (){
const [state, setState] = useState({
    books: [],
    searchfield: ''
})

const searchBook = (e)=>{
    e.preventDefault()
    request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({q: state.searchfield})
    .then((data)=>{
        console.log(data)
    })
    
}

const handleSearch=(e)=>{
    setState({...state, searchfield: e.target.value})
    console.log(e.target.value)
}

    return(
        <div>
            <SearchArea searchBook={searchBook} handleSearch={handleSearch}/>
        </div>
    )
}

export default Books;