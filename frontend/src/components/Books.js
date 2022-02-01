import React,{useState} from "react";

import SearchArea from "./SearchArea";
import request from "superagent";
import BookList from "./BookList";

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
        console.log(data);
        setState({...state,books:[...data.body.items]})
    })
    
}

const handleSearch=(e)=>{
    setState({...state, searchfield: e.target.value})
    console.log(e.target.value)
}

    return(
        <div>
            <SearchArea searchBook={searchBook} handleSearch={handleSearch}/>
            <BookList books={state.books}/>
        </div>
    )
}

export default Books;