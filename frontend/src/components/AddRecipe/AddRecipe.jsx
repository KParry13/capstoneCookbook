import axios from 'axios';
import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth";

const AddRecipe = ({ fetchUserRecipes }) => {
    const[user, token] = useAuth()
    const [newRecipe, setNewRecipe] = useState([])
    const [uploadImage, setUploadImage] = useState ([0])
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    
    async function postNewRecipe() {
        let formData = new FormData()
            formData.append("image_url", uploadImage)
            formData.append("name", name)
            formData.append("ingredients", ingredients)
            formData.append("instructions", instructions)
            formData.append("category", category)
            formData.append("ethnicity", ethnicity)

        try {
            let res = await axios.post("http://127.0.0.1:5000/api/user_recipe", formData, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "multipart/form-data"
                  },
            }, console.log(formData))
            
            console.log(res.data)
            setNewRecipe()
            fetchUserRecipes()
        } catch (error) {
            console.log(error)
        }
    };

    // function handleInputChange(e) {
    //     handleInputChange(newRecipe)
    //     setUploadImage([0])
    //     setName('')
    //     setIngredients('')
    //     setInstructions('')
    //     setCategory('')
    //     setEthnicity('')
    // }

    function handleSubmit(e) {
        e.preventDefault();
        postNewRecipe();
    }
 

    return ( 
        <div>
            
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="file" onChange={(e) => setUploadImage(e.target.files[0])} />
                        
                        
                    </div>
                    <label>
                        Name: {""}
                        <input type="text" name="name" value={name.text} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Measurements & Ingredients: {""}
                        <textarea type="text" name="ingredients" value={ingredients.text} onChange={(e) => setIngredients(e.target.value)} />
                    </label>
                    <label>
                        Instructions: {""}
                        <textarea type="text" name="instructions" value={instructions.text} onChange={(e) => setInstructions(e.target.value)} />
                    </label>
                    <label>
                        Category: {""}
                        <input type="text" name="category" value={category.text} onChange={(e) => setCategory(e.target.value)} />
                    </label>
                    <label>
                        Ethnicity: {""}
                        <input type="text" name="ethnicity" value={ethnicity.text} onChange={(e) => setEthnicity(e.target.value)} />
                    </label>
                    <button>Create!</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddRecipe;
