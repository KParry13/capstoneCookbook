import React from 'react';
// import { useNavigate, Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
const RecipesToTry = ({user, toTry, results} ) => {
    // const navigate = useNavigate();
    // const [user, token] = useAuth();
    return ( 
        <div>
            <div>
                <h2>Creations To Try</h2>
                {/* <Link to="/recipe/:recipeIdMeal" style={{ textDecoration: "none"}}> */}
                {toTry && toTry.map((recipe) => (
                    <p key={recipe.id}>
                        <img src={recipe.thumbnail_url}></img>
                        {recipe.name}
                    </p>
                ))}
                {/* </Link> */}
            </div>
            <div>


            </div>
        </div>
     );
}
 
export default RecipesToTry;

// {user ? (
//     <button onClick={logoutUser}>Logout</button>
//   ) : (
//     <button onClick={() => navigate("/login")}>Login</button>
//   )}