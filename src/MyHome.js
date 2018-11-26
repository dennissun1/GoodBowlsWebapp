import React from 'react';
import {NavLink} from "react-router-dom";
import MapImg from "./Map.png"
import FeedImg from "./Feed.png"
import RecImg from "./cooking.png"
import './Home.css';

class MyHome extends React.Component {
    render() {
        return(
            <div>
                <h3>Welcome to the Good Bowls Web App!</h3>
				<h2>Good Bowls are locally sourced, nutritious frozen meals designed to promote health for people, the community, and the planet, while tackling food insecurity, the lack of dependable access to affordable, healthy food. 
				Good Bowls are for sale at two price points: the higher in premium food stores frequented by higher-income consumers, and the lower in convenience stores, which tend to be frequented by lower-income consumers for daily food needs particularly in “food deserts.”
				We aim to promote healthy food access for all while also supporting local sustainable agriculture.</h2>
                
				<div class="container">
					<img src= {MapImg} alt="Maps"/>
					<div class="centered">
					
					<p>Learn about where you can purchase Good Bowls and where we source our ingredients.<br/><br/></p>
					<NavLink to='/map'><button class="btn">Maps</button></NavLink>
					</div>
				</div>
				
				
				<div class="container">
					<img src= {FeedImg} alt="Feed"/>
					<div class="centered">
					
					<p>Stay up to date with the latest information from the Good Bowls team.<br/><br/></p>
					<NavLink to='/feed'><button class="btn">Feed</button></NavLink>
					</div>
				</div>
				
				
				<div class="container">
					<img src= {RecImg} alt="recipes"/>
					<div class="centered">
					
					<p>Cook your very own delicious Good Bowls at home with our recipes.<br/><br/></p>
					<NavLink to='/recipes'><button class="btn">Recipes</button></NavLink>
					</div>
				</div>

            </div>
        );
    }
}

export default MyHome;
