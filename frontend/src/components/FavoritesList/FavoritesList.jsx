import React from "react";
import { Link } from "react-router-dom";

const FavoritesList = ({user, favorites, fetchDeleteRecipe}) => {

      
    return ( 
        <div>
            <div>
                <h2>{user.username}'s Favorites!</h2>
            
                
                {favorites &&
                favorites.map((recipe) => (
                    <><Link to={`/recipe/${recipe.recipe_id}`} style={{ textDecoration: "none"}}>
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
 
export default FavoritesList;