import React from "react";
//import './Recipes.css';

class MyMakeOwnBowls extends React.Component {


     render() {   
             return (   
       
                 
            <div className = "recipes">
                <h1>Make Your Own Good Bowls</h1>
                <p>Learn 3 easy Good Bowl recipes for you to cook at home! The Good Bowls recipes are based on the Mediterranean diet adapted for southeastern US tastes, emphasizing NC produce like sweet potatoes, peppers, and greens.</p>
                
                <p><NavLink to='/bowl1'>Chicken Burrito Style Bowl</p>
                <p><NavLink to='/bowl2'>Vegetables & Chicken over Rice with Coconut Curry Sauce</p>
                <p><NavLink to='/bowl3'>Sausage & Peppers Bowl with Cheese Grits</p>
                <p>[COMING SOON] Vegetarian Bowl</p>

            </div>
        );
    }
}

export default MyMakeOwnBowls;