import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import UserSubmittedList from "../../components/UserSubmittedList/UserSubmittedList";

const UserSubmittedPage = () => {
    const [user, token] = useAuth();
    const [userSubmitted, setUserSubmitted] = useState([])

    const fetchSubmittedRecipes = async () => {
        try {
            let res = await axios.get(
                'http://127.0.0.1:5000/api/recipes' )
                setUserSubmitted(res.data)
                console.log(res.data)
        } catch (error) {
            console.log(error.res.data)
        }
    };

    useEffect(() => {
    fetchSubmittedRecipes()
    }, []);

    return (
        <div>
            <h2>Other Chef's Creations</h2>
            <UserSubmittedList userSubmitted={userSubmitted}  />
        </div>
     );
}
 
export default UserSubmittedPage;