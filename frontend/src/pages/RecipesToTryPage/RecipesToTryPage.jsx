import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import RecipesToTry from '../../components/RecipesToTryList/RecipesToTry';

const RecipesToTryPage = ( ) => {
    const [user, token] = useAuth();
    const [toTry, setToTry] = useState([]);

    const fetchTryLater = async () => {
        try {
            let res = await axios.get(
                'https://127.0.0.1:5000/api/user_try_later',
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        },
                });
                console.log(res.data)
                setToTry(res.data)
        } catch (error) {
            console.log(error.res.data)
        }
    }

    useEffect(() => {
    fetchTryLater()
    }, [])

    return ( 
        <div>
            <RecipesToTry user={user} toTry={toTry}  />
        </div>
     );
}
 
export default RecipesToTryPage;