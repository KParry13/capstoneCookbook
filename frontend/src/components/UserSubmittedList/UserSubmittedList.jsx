import React from 'react'

const UserSubmittedList = ({ userSubmitted }) => {
    console.log(userSubmitted)


    return (
        <div>
            <ul>
                    {userSubmitted && 
                    userSubmitted.map((item =>
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
 
export default UserSubmittedList;
