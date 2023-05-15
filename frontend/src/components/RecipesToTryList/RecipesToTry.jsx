import React from 'react';
import { Link } from "react-router-dom";

const RecipesToTry = ({ toTry, fetchDeleteRecipe } ) => {
    console.log(toTry)
    return ( 
        <div>
            <div>
                <h2>Creations To Try</h2>
                {toTry && toTry.map((recipe) => (
                   <> <Link to={`/recipe/${recipe.recipe_id}`} style={{ textDecoration: "none"}}>

                    <p key={recipe.id}>
                            <img src={recipe.thumbnail_url}></img>
                            {recipe.name}
                            <button>Recipe</button>
                        
                    </p>
                    </Link>
                    <button onClick={() => fetchDeleteRecipe(recipe.id)}>Delete</button></>

                ))}
                
            </div>
        </div>
     );
}
 
export default RecipesToTry;
