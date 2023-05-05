import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddRecipe from '../../components/AddRecipe/AddRecipe';
import useAuth from "../../hooks/useAuth";
import MyRecipesList from '../../components/MyRecipesList/MyRecipesList';
import EditForm from '../../components/EditForm/EditForm';

const AddRecipePage = () => {
    const [user, token] = useAuth();
    const [userRecipe, setUserRecipe] = useState([])
    const [editId, setEditId] = useState()
    const [deleteRecipe, setDeleteRecipe] = useState("");

    const fetchUserRecipes = async () => {
        try {
            let res = await axios.get(
                'http://127.0.0.1:5000/api/user_recipe', {
                    headers: {
                        Authorization: "Bearer " + token,
                      },
                })
                setUserRecipe(res.data)
                console.log(res.data)
        } catch (error) {
            console.log(error.res.data)
        }
    };

    async function fetchDeleteRecipe(id) {
        let res = await axios.delete(
          `http://127.0.0.1:5000/api/recipes/${id}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (res.status === 204) {
          setDeleteRecipe("");
          fetchUserRecipes()
        }
      }

    useEffect(() => {
    fetchUserRecipes()
    }, []);

    return (
        <div>
            <h2>Your Creations</h2>
            <AddRecipe   fetchUserRecipes={fetchUserRecipes} />
            <MyRecipesList userRecipe={userRecipe} setEditId={setEditId}
            fetchDeleteRecipe={fetchDeleteRecipe}
            />
            {editId ? <EditForm fetchUserRecipe={fetchUserRecipes} editId={editId} /> : 
            null}
        </div>
     );
}
 
export default AddRecipePage;