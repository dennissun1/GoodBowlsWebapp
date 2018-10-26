import React from "react";
import './Recipes.css';

class MyMakeOwnBowls extends React.Component {
  
openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

     render() {   
             return (   
                 
<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'London')">London</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
  <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
</div>

<div id="London" class="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p> 
</div>

<div id="Tokyo" class="tabcontent">
  <h3>Tokyo</h3>
  <p>Tokyo is the capital of Japan.</p>
</div>
                 
            <div className = "recipes">
                <h1>Make Your Own Good Bowls</h1>
                <p>Learn 3 easy Good Bowl recipes for you to cook at home! The Good Bowls recipes are based on the Mediterranean diet adapted for southeastern US tastes, emphasizing NC produce like sweet potatoes, peppers, and greens.</p>
                <h2>Chicken Burrito Style Bowl</h2>
                <div className="video-container">
                    <iframe title="video1" src="https://www.youtube.com/embed/YUFn7MZ4RAM" frameBorder="0" allow="autoplay; encrypted-media" />
                </div>
                <h3>Ingredients</h3>
                <p> 1 head cauliflower<br />
                    1 chicken breast, diced<br />
                    1 cup  peas<br />
                    1 cup  carrot<br />
                    2 tablespoons  soy sauce<br />
                    2 teaspoons  black pepper<br />
                    3 eggs, beaten<br />
                    2 tablespoons  sesame seed
                </p>

                <h3>Preparation</h3>
                <ol>
                  <li>Remove all leaves and cut the cauliflower into small florets. Place the florets in a food processor and blend until they are a rice-like texture. Be careful not to over process or it may turn mushy. Set aside, and drain excess moisture with a towel, if desired.</li>
                  <li>In a large saucepan over medium-high heat, cook the chicken until no pink is showing.</li>
                  <li>Add the peas, carrots, soy sauce, and black pepper.</li>
                  <li>Stir until most of the liquid has reduced, then add the cauliflower rice. Cook for about 3-4 minutes until the vegetables and chicken are incorporated evenly into the cauliflower.</li>
                  <li>Spread the rice towards the edge of the pan, creating a well in the center. Pour the beaten eggs into the well, stirring only the eggs until they are cooked.</li>
                  <li>Fold the eggs into the rice, then mix in the sesame seeds.</li>
                </ol>


                <h2>Vegetables & Chicken over Rice with Coconut Curry Sauce</h2>

                <div className="video-container">
                    <iframe title="video2" src="https://www.youtube.com/embed/dfR_LdA3fPI" frameBorder="0" allow="autoplay; encrypted-media" />
                </div>

                <h3>Ingredients</h3>
                <p> 1 head cauliflower<br />
                    1 chicken breast, diced<br />
                    1 cup  peas<br />
                    1 cup  carrot<br />
                    2 tablespoons  soy sauce<br />
                    2 teaspoons  black pepper<br />
                    3 eggs, beaten<br />
                    2 tablespoons  sesame seed
                </p>

                <h3>Preparation</h3>
                <ol>
                  <li>Remove all leaves and cut the cauliflower into small florets. Place the florets in a food processor and blend until they are a rice-like texture. Be careful not to over process or it may turn mushy. Set aside, and drain excess moisture with a towel, if desired.</li>
                  <li>In a large saucepan over medium-high heat, cook the chicken until no pink is showing.</li>
                  <li>Add the peas, carrots, soy sauce, and black pepper.</li>
                  <li>Stir until most of the liquid has reduced, then add the cauliflower rice. Cook for about 3-4 minutes until the vegetables and chicken are incorporated evenly into the cauliflower.</li>
                  <li>Spread the rice towards the edge of the pan, creating a well in the center. Pour the beaten eggs into the well, stirring only the eggs until they are cooked.</li>
                  <li>Fold the eggs into the rice, then mix in the sesame seeds.</li>
                </ol>

                <h2>Sausage & Peppers Bowl with Cheese Grits</h2>

                <div className="video-container">
                    <iframe title="video3" src="https://www.youtube.com/embed/AEhBwiIEdj4" frameBorder="0" allow="autoplay; encrypted-media" />
                </div>

                <h3>Ingredients</h3>
                <p> 1 head cauliflower<br />
                    1 chicken breast, diced<br />
                    1 cup  peas<br />
                    1 cup  carrot<br />
                    2 tablespoons  soy sauce<br />
                    2 teaspoons  black pepper<br />
                    3 eggs, beaten<br />
                    2 tablespoons  sesame seed
                </p>

                <h3>Preparation</h3>
                <ol>
                  <li>Remove all leaves and cut the cauliflower into small florets. Place the florets in a food processor and blend until they are a rice-like texture. Be careful not to over process or it may turn mushy. Set aside, and drain excess moisture with a towel, if desired.</li>
                  <li>In a large saucepan over medium-high heat, cook the chicken until no pink is showing.</li>
                  <li>Add the peas, carrots, soy sauce, and black pepper.</li>
                  <li>Stir until most of the liquid has reduced, then add the cauliflower rice. Cook for about 3-4 minutes until the vegetables and chicken are incorporated evenly into the cauliflower.</li>
                  <li>Spread the rice towards the edge of the pan, creating a well in the center. Pour the beaten eggs into the well, stirring only the eggs until they are cooked.</li>
                  <li>Fold the eggs into the rice, then mix in the sesame seeds.</li>
                </ol>
                
            </div>
        );
    }
}

export default MyMakeOwnBowls;