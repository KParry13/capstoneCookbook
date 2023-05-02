import React from "react";

const FavoritesList = ({user, favorites, fetchDeleteRecipe}) => {

      
    return ( 
        <div>
            <div>{user.username}'s Favorites!</div>
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