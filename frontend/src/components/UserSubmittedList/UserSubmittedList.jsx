import React from 'react'

const UserSubmittedList = ({ userSubmitted }) => {
    console.log(userSubmitted)


    return (
        <div>
            <ul>
                <li>
                    {userSubmitted.recipe && 
                    userSubmitted.recipe.map((item =>
                    <p>
                       {/* Posted By {user.id} */}
                        {item.name}
                        {item.ingredients}
                        {item.instructions}
                        {item.category}
                        {item.ethnicity}
                    </p>
                    ))}
                </li>
            </ul>
        </div> 

     );
}
 
export default UserSubmittedList;