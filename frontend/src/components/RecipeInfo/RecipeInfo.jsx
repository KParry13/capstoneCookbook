import React from "react";


const RecipeInfo = ({recipeInfo}) => {

    var allingredients = []
    for(const key in recipeInfo) {
        if (key.includes("strIngredient")) {
            console.log((`${recipeInfo[key]}`))
            allingredients.push(<li>{recipeInfo[key]} </li>)
        }
    }

    return ( 
        <div>
            <h2> infooooo on foood</h2>
            <img src={recipeInfo.strMealThumb}></img>
            <h3> {recipeInfo.strMeal} </h3>
            <ul>
                {allingredients}
                
            </ul>
            <h5>{recipeInfo.strInstructions}</h5>
        </div>
     );
}
 
export default RecipeInfo;