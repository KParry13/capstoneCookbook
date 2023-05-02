import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import FavoritesList from "../../components/FavoritesList/FavoritesList";

const FavoritesPage = () => {
  const [user, token] = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [deleteRecipe, setDeleteRecipe] = useState("");

  const fetchFavorites = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:5000/api/user_favorites", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(res.data);
      setFavorites(res.data);
    } catch (error) {
      console.log(error.res.data);
    }
  };

  async function fetchDeleteRecipe(recipeIdMeal) {
    let res = await axios.delete(
      `http://127.0.0.1:5000/api/user_favorites/${recipeIdMeal}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (res.status === 204) {
      setDeleteRecipe("");
      fetchFavorites()
    }
  }

  useEffect(() => {
    fetchFavorites();
  }, [token]);
  return (
    <div>
      <FavoritesList
        user={user}
        favorites={favorites}
        setFavorites={setFavorites}
        fetchDeleteRecipe={fetchDeleteRecipe}
      />
    </div>
  );
};

export default FavoritesPage;
