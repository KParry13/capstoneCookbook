import React, {useState} from "react";

// import { useNavigate } from "react-router-dom";

const RecipeInfo = ({recipeInfo, postNewFavorite, newFav, postNewTryLater, addTryNew}) => {
    // const navigate = useNavigate();
    const [add, setAdd] =useState("active")

    var allingredients = []
    for(const key in recipeInfo) {
        if (key.includes("strIngredient")) {
            console.log((`${recipeInfo[key]}`))
            allingredients.push(<li>{recipeInfo[key]} </li>)
        }
    }
    
    function handleButtons(){
        if(add === "active"){
            setAdd(newFav || addTryNew)
        } else {
            setAdd(null)
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
           
            <button type='button' className={add} onClick={() => handleButtons(newFav)}>Favorite</button>
            <button type='button' className={add} onClick={() => handleButtons(addTryNew)}>Try Later</button>
            
        </div>
     );
}
 
export default RecipeInfo;