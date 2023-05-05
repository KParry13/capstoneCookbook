import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";

const EditForm = ({ fetchUserRecipe, editId }) => {
    const [user, token] = useAuth();
   

    const defaultValues = {
        "name": "",
        "ingredients": "",
        "instructions": "",
        "category": "",
        "ethnicity": ""
    }

    const [formData, handleInputChange, handleSubmit, setFormValues] = useCustomForm(defaultValues, putEditRecipe);

    const getId = async (editId) => {
        let res = await axios.get(
            `http://127.0.0.1:5000/api/edit_recipe/${editId}`, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
                console.log(editId)
            console.log(res.data)
            setFormValues(res.data)
    }
    async function putEditRecipe() {
        try {
                let res = await axios.put(`http://127.0.0.1:5000/api/recipes/${editId}`, formData, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
                console.log(res.data)
                fetchUserRecipe()
            } catch (error) {
                console.log(error.res.data)
            }
    };
    
    useEffect(()=>{
        getId(editId)
    },[editId])
    return ( 
        <div>

            <div>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" >Update</button>
                </form>
            </div>
        </div>
     );
}
 
export default EditForm;