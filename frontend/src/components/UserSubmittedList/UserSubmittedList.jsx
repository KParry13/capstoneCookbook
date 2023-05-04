import React from 'react'

const UserSubmittedList = ({ userSubmitted, postNewFavorite, newFav, postNewTryLater, addTryNew }) => {
    console.log(userSubmitted)


    return (
        <div>
            <ul>
                    {userSubmitted && 
                    userSubmitted.map((item =>
                    <li key={item.id}>
                       {/* Posted By {user.id} */}
                        {item.name} <br/>
                        {item.ingredients}<br/>
                        {item.instructions} <br/>
                        {item.category}<br/>
                        {item.ethnicity}<br/>
                        {item.id.username}<br/>
                        <button onClick={() => postNewFavorite(newFav)}>Favorite</button>
                        <button onClick={() => postNewTryLater(addTryNew)}>Try Later</button>
                    </li>
                    ))}
            </ul>
        </div> 

     );
}
 
export default UserSubmittedList;
