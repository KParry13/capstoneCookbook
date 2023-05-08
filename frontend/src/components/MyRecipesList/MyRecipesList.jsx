import React from 'react';
import './MyRecipesList.css';
const MyRecipesList = ({ userRecipe, fetchDeleteRecipe, setEditId }) => {
    console.log(userRecipe)

    return ( 

        <div className='container'>
            <ul className='myRecipes'>
                {userRecipe && 
                userRecipe.map((item =>
                <div key={item.id} className='recipe '>
                    {/* Posted By {user.id} */}
                    <h3 className='header'>{item.name} <br/></h3>
                    <div className='body'>
                        {item.ingredients}<br />
                        {item.instructions}<br/>
                        {item.category}<br/>
                        {item.ethnicity}<br/>
                    </div>
                    <div className='actions'>
                        <button onClick={() => setEditId(item.id)}>Edit</button>
                        <button onClick={() => fetchDeleteRecipe(item.id)}>Delete</button>
                    </div>
                </div>
                ))}
            </ul>
        </div>
     );
}
 
export default MyRecipesList;