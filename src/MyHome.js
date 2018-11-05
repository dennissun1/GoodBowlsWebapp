import React from 'react';

class My_Home extends React.Component {
    render() {
        return(
            <div className = "Home">
                <h1>Welcome to the Good Bowls WebApp!</h1>
                
                //<img src="Home.jpg" alt="Good Bowls Home">
            
                //<a href="https://goodbowlstest.herokuapp.com/map">MAPS</a> 
                <p>Learn about where you can purchase Good Bowls and where we source our ingredients.</p>
            
                 //<a href="https://goodbowlstest.herokuapp.com/feed">FEED</a> 
                <p>Stay up to date with the latest information from the Good Bowls team.</p>
            
                 //<a href="https://goodbowlstest.herokuapp.com/bowl1">RECIPES</a> 
                 <p>Cook your very own Good Bowls at home with our recipes.</p>
            </div>
        );
    }
}

export default My_Home;