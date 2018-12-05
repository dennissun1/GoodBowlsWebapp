import React from 'react';
import {NavLink} from "react-router-dom";
import MapImg from "./Map.png"
import FeedImg from "./Feed.png"
import RecImg from "./cooking.png"
import './MyHome.css';

class MyHome extends React.Component {
    render() {
        return(
            <div>
                <h3>Welcome to the Good Bowls Web App!</h3>
				<h2>Good Bowls are locally sourced, nutritious frozen meals designed to promote health for people, the community, and the planet, while tackling food insecurity, the lack of dependable access to affordable, healthy food. 
				Good Bowls are for sale at two price points: the higher in premium food stores frequented by higher-income consumers, and the lower in convenience stores, which tend to be frequented by lower-income consumers for daily food needs particularly in “food deserts.”
				We aim to promote healthy food access for all while also supporting local sustainable agriculture.</h2>

				<div className="container">
					<img src= {MapImg} className="image" alt="Maps"/>
					<div className="centered">
						<p>Learn about where you can purchase Good Bowls and where we source our ingredients. To use navigation, enable your location services<br/><br/></p>
						<NavLink to='/map'><button className="btn">Maps</button></NavLink>
					</div>
				</div>

				<div className="container">
					<img src= {FeedImg} className="image" alt="Feed"/>
					<div className="centered">
						<p>Stay up to date with the latest information from the Good Bowls team.<br/><br/></p>
						<NavLink to='/feed'><button className="btn">Feed</button></NavLink>
					</div>
				</div>

				<div className="container">
					<img src= {RecImg} className="image" alt="recipes"/>
					<div className="centered">
						<p>Cook your very own delicious Good Bowls at home with our recipes.<br/><br/></p>
						<NavLink to='/recipes'><button className="btn">Recipes</button></NavLink>
					</div>
				</div>

            </div>
        );
    }
}
export default MyHome;
