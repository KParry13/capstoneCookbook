import React from "react";


const RecipeInfo = ({recipeInfo}) => {


    return ( 
        <div>
            <h2> infooooo on foood</h2>
            <img src={recipeInfo.strMealThumb}></img>
            <h3> {recipeInfo.strMeal} </h3>
            {/* <h3> {recipeInfo.strIngredient} </h3> */}
            <h5>{recipeInfo.strInstructions}</h5>
        </div>
     );
}
 
export default RecipeInfo;