import React from "react";
import './Recipes.css';

class MyMakeOwnBowls extends React.Component {
    
window.addEventListener("load", function() {
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.nav-tabs > li");
    
  function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}
    
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
    
});

     render() {   
        return(  
            <div class="container--tabs">
	<section class="row">
		<ul class="nav nav-tabs">
			<li class="active"><a href="#tab-1">Tab 1</a></li>
			<li class=""><a href="#tab-2">Tab 2</a></li>
			<li class=""><a href="#tab-3">Tab 3</a></li>
		</ul>
		<div class="tab-content">
			<div id="tab-1" class="tab-pane active"> 
				<span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
				<span class="col-md-10">
					<h3>Feature 1</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</span>
			</div> 
			<div id="tab-2" class="tab-pane">
				<span class="glyphicon glyphicon-fire glyphicon--home--feature two columns text-center"></span>
				<span class="col-md-10">
					<h3>Feature 2</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</span>
			</div>
			<div id="tab-3" class="tab-pane">
				<span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
				<span class="col-md-10">
					<h3>Feature 3</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</span>
			</div>
		</div>
	</section>
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