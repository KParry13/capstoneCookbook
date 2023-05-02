import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';
const FavoritesPage = ( ) => {
    const [user, token] = useAuth();
    const [favorites, setFavorites] = useState([]);
    const [deleteRecipe, setDeleteRecipe] = useState ("")
    const fetchFavorites = async () => {
        try {
        let res = await axios.get(
        'http://127.0.0.1:5000/api/user_favorites',    
        {
            headers: {
                Authorization: "Bearer " + token,
            },
            });
            console.log(res.data)
            setFavorites(res.data);
      } catch (error) {
        console.log(error.res.data);
      }
    };
    
    // async function fetchDeleteRecipe(recipeIdMeal) {
    //     try{
    //         let res = await axios.delete(
    //         `http://127.0.0.1:5000/api/user_favorites/${recipeIdMeal}`, {
    //             headers: {
    //                 Authorization: "Bearer " + token,
    //             },
    //             }
    //         )
    //     setFavorites(res.data)
    //     console.log(res.data)
    //     } catch {error} {
    //     console.log(error.res.data)
    //     }}
        
    //     useEffect(() => {
    //         fetchDeleteRecipe()
    //     }, [])
        useEffect(() => {
        fetchFavorites();
    }, [token]);
    return ( 
        <div>
            <FavoritesList user={user} favorites={favorites} setFavorites={setFavorites} 
             deleteRecipe={deleteRecipe}
             />
        </div>
     );
}

export default FavoritesPage;