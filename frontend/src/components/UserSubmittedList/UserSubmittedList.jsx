import React from 'react'
import './UserSubmittedList.css'
const UserSubmittedList = ({ userSubmitted, postNewFavorite, newFav, postNewTryLater, addTryNew }) => {
    console.log(userSubmitted)


    return (
        <div className='contain'>
            <ul className='recipes'>
                {userSubmitted && 
                userSubmitted.map((item =>
                <li className='card' key={item.id}>
                    {item.name} <br/>
                    {item.ingredients}<br/>
                    {item.instructions} <br/>
                    {item.category}<br/>
                    {item.ethnicity}<br/>
                    {item.id.username}<br/>
                <div className='actions'>
                    <button onClick={() => postNewFavorite(newFav)}>Favorite</button>
                    <button onClick={() => postNewTryLater(addTryNew)}>Try Later</button>
                </div>               
                </li>
                ))}
            </ul>
        </div> 

     );
}
 
export default UserSubmittedList;
