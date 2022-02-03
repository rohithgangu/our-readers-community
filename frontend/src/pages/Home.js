import React from 'react'
import Header from '../components/Header';
import Books from '../components/Books';
function Home(){
    return(
        <div className="home">
            <Header/>
            <Books/>
        </div>

    );
};

export default Home