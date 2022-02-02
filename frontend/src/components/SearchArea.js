import React from "react";
function SearchArea({handleSearch,searchBook,handleSort}){
    return(
        <div className="search-area">
            <form onSubmit={(e)=>searchBook(e)}>
                <input type="text" onChange={(e)=>handleSearch(e)}/>
                <button type="submit">search</button>
                <select name="" id="" defaultValue="sort" onChange={(e)=>handleSort(e)}>
                    <option disabled value="sort">sort</option>
                    <option value="newest">newest</option>
                    <option value="oldest">oldest</option>
                </select>
            </form>

        </div>
    )
}
export default SearchArea;