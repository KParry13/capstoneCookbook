import React from "react";

const FavoritesList = ({user, favorites, fetchDeleteRecipe}) => {

      
    return ( 
        <div>
            <h2>{user.username}'s Favorites!</h2>
            {favorites &&
            favorites.map((recipe) => (
            <p key={recipe.id}>
            <img src={recipe.thumbnail_url}></img>
             {recipe.name}
            <button onClick={() => fetchDeleteRecipe(recipe.id)}>Delete</button>
            </p>
            
        ))}
        

        </div>
     );
}
 
export default FavoritesList;