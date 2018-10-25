import React from "react";
import './Recipes.css';

class MyMakeOwnBowls extends React.Component {
    render() {
        return(
            <head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial;}

/* Style the tab */
.tab {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
    background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
    background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
}
</style>
</head>
<body>

<h2>Tabs</h2>
<p>Click on the buttons inside the tabbed menu:</p>

<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'London')">Chicken Burrito Style Bowl</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">Vegetables & Chicken over Rice with Coconut Curry Sauce</button>
  <button class="tablinks" onclick="openCity(event, 'Tokyo')">Sausage & Peppers Bowl with Cheese Grits</button>
</div>

<div id="London" class="tabcontent">
  <h3>Chicken Burrito Style Bowl</h3>
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
</div>

<div id="Paris" class="tabcontent">
  <h3>Vegetables & Chicken over Rice with Coconut Curry Sauce</h3>
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
</div>

<div id="Tokyo" class="tabcontent">
  <h3>Sausage & Peppers Bowl with Cheese Grits</h3>
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

<script>
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
</script>
     
</body>
            
            
            
            
            
            
            
            
            
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