import React, {useState} from "react";

const FavoritesList = ({user, favorites, fetchDeleteRecipe, deleteRecipe}) => {

      
    return ( 
        <div>
            <div>{user.username}'s Favorites!</div>
            {favorites &&
            favorites.map((recipe) => (
            <p key={recipe.id}>
            <img src={recipe.thumbnail_url}></img>
             {recipe.name}
            <button onClick={() => deleteRecipe}>Delete</button>
            </p>
            
        ))}
        

        </div>
     );
}
 
export default FavoritesList;