import React from 'react'

const MyRecipesList = ({ userRecipe }) => {
    console.log(userRecipe)
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
                </li>
                ))}
        </ul>
    </div>
     );
}
 
export default MyRecipesList;