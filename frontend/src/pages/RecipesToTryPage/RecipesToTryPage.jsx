import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import RecipesToTry from '../../components/RecipesToTryList/RecipesToTry';

const RecipesToTryPage = ( ) => {
    const [user, token] = useAuth();
    const [toTry, setToTry] = useState([]);
    const [deleteRecipe, setDeleteRecipe] = useState("");

    const fetchTryLater = async () => {
        try {
            let res = await axios.get(
                'http://127.0.0.1:5000/api/user_try_later',
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        },
                });
                console.log(res.data)
                setToTry(res.data)
        } catch (error) {
            console.log(error.res.data)
        }
    };

    async function fetchDeleteRecipe(recipeIdMeal) {
        let res = await axios.delete(
          `http://127.0.0.1:5000/api/user_try_later/${recipeIdMeal}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (res.status === 204) {
          setDeleteRecipe("");
          fetchTryLater()
        }
      };

    useEffect(() => {
    fetchTryLater()
    }, []);

    return ( 
        <div>
            <RecipesToTry toTry={toTry} fetchDeleteRecipe={fetchDeleteRecipe} />
            
        </div>
     );
}

export default RecipesToTryPage;