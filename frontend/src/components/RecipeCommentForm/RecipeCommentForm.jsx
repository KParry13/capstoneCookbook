import React from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

const RecipeCommentForm = ({recipeIdMeal, fetchRecipeInfo, fetchComments}) => {
    const[user, token] = useAuth()
    const defaultValues = {
        "recipe_id": recipeIdMeal,
        "text": "",
        "rating": ""
}
    const [formData, handleInputChange, handleSubmit] = useCustomForm(defaultValues, postNewComment);

    async function postNewComment() {
        try {
            let res = await axios.post("http://127.0.0.1:5000/api/user_comment", formData, {
                headers: {
                    Authorization: "Bearer " + token,
                  },
            })
            console.log(res.data)
            fetchComments()
            fetchRecipeInfo()
        } catch (error) {
            console.log(error)
        }
    };

    return ( 
        <div>
        
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Comment:{""}
                        <input type="text" name="text" value={formData.text} onChange={handleInputChange} />
                    </label>
                    <label>
                        Rating:{} 
                        <input typer="text" name="rating" value={formData.rating} onChange={handleInputChange} />
                    </label>
                    <button>Your Thoughts...</button>
                </form>
            </div>
        </div>
     );
}
 
export default RecipeCommentForm;