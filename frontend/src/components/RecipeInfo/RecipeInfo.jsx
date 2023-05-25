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
        <div className="contain">
            <h2> {recipeInfo.strMeal} </h2>
            <img src={recipeInfo.strMealThumb}></img>
            <div className="recipe">
                
                <ul>
                    {allingredients}
                </ul>
                <h5>{recipeInfo.strInstructions}</h5>
                <div>
                    <button onClick={() => postNewFavorite(newFav)}>Favorite</button>
                    <button onClick={() => postNewTryLater(addTryNew)}>Try Later</button>
                </div>
            </div>
        </div>
     );
}
 
export default RecipeInfo;