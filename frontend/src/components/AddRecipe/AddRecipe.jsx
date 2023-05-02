import axios from 'axios';
import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

const AddRecipe = ({ fetchUserRecipes }) => {
    const[user, token] = useAuth()
    const [newRecipe, setNewRecipe] = useState([])
    const [uploadImage, setUploadImage] = useState ([])

    const defaultValues = {
        "name": "",
        "ingredients": "",
        "instructions": "",
        "category": "",
        "ethnicity": ""
    }

    const [formData, handleInputChange, handleSubmit] = useCustomForm(defaultValues, postNewRecipe);

    async function postNewRecipe() {
        try {
            let res = await axios.post("http://127.0.0.1:5000/api/user_recipe", formData, {
                headers: {
                    Authorization: "Bearer " + token,
                  },
            })
            console.log(res.data)
            setNewRecipe()
            fetchUserRecipes()
        } catch (error) {
            console.log(error)
        }
    };

    function handleChange(e) {
        console.log(e.target.images)
        setUploadImage(URL.createObjectURL(e.target.images[0]))
    };

    return ( 
        <div>
            
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="file" onChange={handleChange} />
                        <img src={uploadImage} />
                        
                    </div>
                    <label>
                        Name: {""}
                        <input type="text" name="name" value={formData.text} onChange={handleInputChange} />
                    </label>
                    <label>
                        Measurements & Ingredients: {""}
                        <textarea type="text" name="ingredients" value={formData.text} onChange={handleInputChange} />
                    </label>
                    <label>
                        Instructions: {""}
                        <textarea type="text" name="instructions" value={formData.text} onChange={handleInputChange} />
                    </label>
                    <label>
                        Category: {""}
                        <input type="text" name="category" value={formData.text} onChange={handleInputChange} />
                    </label>
                    <label>
                        Ethnicity: {""}
                        <input type="text" name="ethnicity" value={formData.text} onChange={handleInputChange} />
                    </label>
                    <button>Create!</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddRecipe;
