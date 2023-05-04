import React from 'react'
import { useNavigate } from "react-router-dom";

const MyRecipesList = ({ userRecipe, putEditRecipe }) => {
    console.log(userRecipe)
    // const navigate = useNavigate();
    return ( 

        <div>
        <ul>
                {userRecipe && 
                userRecipe.map((item =>
                <li key={item.id}>
                   {/* Posted By {user.id} */}
                    {item.name} <br/>
                    {item.ingredients}<br />
                    {item.instructions} <br/>
                    {item.category}<br/>
                    {item.ethnicity}<br/>
                    {/* <button onClick={() => navigate("/add", putEditRecipe)}>Edit</button> */}
                </li>
                ))}
        </ul>
    </div>
     );
}
 
export default MyRecipesList;

