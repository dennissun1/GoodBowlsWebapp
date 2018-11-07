import React from 'react';
import {NavLink} from "react-router-dom";
import HomeImg from "./Home.jpg"

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
            </div>
        );
    }
}

export default MyHome;