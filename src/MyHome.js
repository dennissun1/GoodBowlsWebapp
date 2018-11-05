import React from 'react';
import {NavLink} from "react-router-dom";
import HomeImg from "./Home.jpg"

<<<<<<< HEAD
class MyHome extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome to the Good Bowls Web App!</h1>
                <img src = {HomeImg} alt = "home"/>
                <p/>
                <p>Learn about where you can purchase Good Bowls and where we source our ingredients. Visit <NavLink to='/map'>Map</NavLink>.</p>
                <p>Stay up to date with the latest information from the Good Bowls team. Visit <NavLink to='/feed'>Feed</NavLink>.</p>
                <p>Cook your very own Good Bowls at home with our recipes. Visit <NavLink to='/recipes'>Recipes</NavLink>.</p>
=======
class My_Home extends React.Component {
    render() {
        return(
            <div className = "Home">
                
            <h1>Welcome to the Good Bowls WebApp!</h1>

<a href="https://goodbowlstest.herokuapp.com/map/">MAP</a> 
<p>Learn about where you can purchase Good Bowls and where we source our ingredients.</p>

<a href="https://goodbowlstest.herokuapp.com/feed/">FEED</a> 
<p>Stay up to date with the latest information from the Good Bowls team.</p>

<a href="https://goodbowlstest.herokuapp.com/recipes/">RECIPES</a> 
<p>Cook your very own Good Bowls at home with our recipes.</p>

            
>>>>>>> 075af49d9f6a7f2b7fb08f27b51cfd0e5f13bd15
            </div>
        );
    }
}

<<<<<<< HEAD
export default MyHome;
=======
export default My_Home;
>>>>>>> 075af49d9f6a7f2b7fb08f27b51cfd0e5f13bd15
