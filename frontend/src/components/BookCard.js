import React from "react";
function BookCard({image,title,author,published}){
    return(
        <div className="card-container">
            <img src={image} alt="" />
        <div className="desc">
            <h2>{title}</h2>
            <h3>{author}</h3>
            
            <h1>{published}</h1>
        </div>
        </div>
    )
}
export default BookCard;