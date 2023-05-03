import React from "react";


const RecipeInfo = ({recipeInfo, postNewFavorite, newFav, postNewTryLater, addTryNew}) => {

    var allingredients = []
    for(const key in recipeInfo) {
        if (key.includes("strIngredient")) {
            console.log((`${recipeInfo[key]}`))
            allingredients.push(<li>{recipeInfo[key]} </li>)
        }
    }
    

    return ( 
        <div>
            <h2>Recipe Card</h2>
            <img src={recipeInfo.strMealThumb}></img>
            <h3> {recipeInfo.strMeal} </h3>
            <ul>
                {allingredients}
            </ul>
            <h5>{recipeInfo.strInstructions}</h5>
           
            <button onClick={() => postNewFavorite(newFav)}>Favorite</button>
            <button onClick={() => postNewTryLater(addTryNew)}>Try Later</button>
            
        </div>
     );
}
 
export default RecipeInfo;