import React,{useState} from "react";

import SearchArea from "./SearchArea";
import request from "superagent";
import BookList from "./BookList";

function Books (){
const [state, setState] = useState({
    books: [],
    searchfield: '',
    sort: ''
})

const handleSort = (e)=>{
    console.log(e.target.value)
    setState({...state, sort:e.target.value})
}
const searchBook = (e)=>{
    e.preventDefault()
    request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({q: state.searchfield})
    .then((data)=>{
        console.log(data);
        const cleandatabooks = cleanData(data)
        setState({...state,books:cleandatabooks})
    })
    
}

const cleanData=(data)=>{
    const cleanedData=data.body.items.map((book)=>{
        if(book.volumeInfo.hasOwnProperty('publishedDate')===false){
            book.volumeInfo['publishedDate']='0000';
        }
        else if(book.volumeInfo.hasOwnProperty('imageLinks')===false){
            book.volumeInfo['imageLinks']={ thumbnail :'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png'}
        }
        return book;
    })
    return cleanedData;
}

const handleSearch=(e)=>{
    setState({...state, searchfield: e.target.value})
}
const sortedBooks = state.books.sort((a,b)=>{
    if(state.sort==='newest'){
        return parseInt(b.volumeInfo.publishedDate.substring(0,4))- parseInt(a.volumeInfo.publishedDate.substring(0,4))
    }
    else if(state.sort === 'oldest'){
        return parseInt(a.volumeInfo.publishedDate.substring(0,4))- parseInt(b.volumeInfo.publishedDate.substring(0,4))

    }
})
    return(
        <div>
            <SearchArea searchBook={searchBook} handleSearch={handleSearch} handleSort={handleSort}/>
            <BookList books={sortedBooks}/>
        </div>
    )
}

export default Books;