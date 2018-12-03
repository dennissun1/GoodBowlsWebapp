import React from 'react';
import './Recipes.css';
import {NavLink} from "react-router-dom";

class Bowl3 extends React.Component {
    render() {
        return(
           <div className="recipes">
                <h3 className="bowl-title">Sausage & Peppers Bowl with Cheese Grits</h3>

                <div className="video-container">
                    <iframe title="video3" src="https://www.youtube.com/embed/AEhBwiIEdj4" frameBorder="0" allow="autoplay; encrypted-media" />
                </div>

                <h3 className="sub-title">Ingredients</h3>
                <p> 1 head cauliflower<br/>
                    1 chicken breast, diced<br/>
                    1 cup  peas<br/>
                    1 cup  carrot<br/>
                    2 tablespoons  soy sauce<br/>
                    2 teaspoons  black pepper<br/>
                    3 eggs, beaten<br/>
                    2 tablespoons  sesame seed
                </p>

                <h3 className="sub-title">Preparation</h3>
                <ol>
                  <li>Remove all leaves and cut the cauliflower into small florets. Place the florets in a food processor and blend until they are a rice-like texture. Be careful not to over process or it may turn mushy. Set aside, and drain excess moisture with a towel, if desired.</li>
                  <li>In a large saucepan over medium-high heat, cook the chicken until no pink is showing.</li>
                  <li>Add the peas, carrots, soy sauce, and black pepper.</li>
                  <li>Stir until most of the liquid has reduced, then add the cauliflower rice. Cook for about 3-4 minutes until the vegetables and chicken are incorporated evenly into the cauliflower.</li>
                  <li>Spread the rice towards the edge of the pan, creating a well in the center. Pour the beaten eggs into the well, stirring only the eggs until they are cooked.</li>
                  <li>Fold the eggs into the rice, then mix in the sesame seeds.</li>
                </ol>
                
                <p><br/><br/>More Recipes:<br/>
               <NavLink to='/bowl1'>Chicken Burrito Style Bowl</NavLink><br/>
                <NavLink to='/bowl2'>Vegetables & Chicken over Rice with Coconut Curry Sauce</NavLink></p>
            
            </div>
        );
    }
}

export default Bowl3;