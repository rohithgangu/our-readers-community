import React from "react";
function BookCard({image,title,author,published}){
    return(
        <div className="card-container">
            <img src={image} alt="" />
        <div className="desc">
            <h2>{title}</h2>
            <h3>Author:{author}</h3>
            
            <p>Published Date: {published==='0000'?'Not Available':published.substring(0,4)}</p>
        </div>
        </div>
    )
}
export default BookCard;