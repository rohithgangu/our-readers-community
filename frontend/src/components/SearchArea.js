import React from "react";
function SearchArea({handleSearch,searchBook}){
    return(
        <div className="search-area">
            <form onSubmit={(e)=>searchBook(e)}>
                <input type="text" onChange={(e)=>handleSearch(e)}/>
                <button type="submit">search</button>
            </form>

        </div>
    )
}
export default SearchArea;