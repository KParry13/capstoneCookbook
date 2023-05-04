import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import UserSubmittedList from "../../components/UserSubmittedList/UserSubmittedList";

const UserSubmittedPage = () => {
    const [user, token] = useAuth();
    const [userSubmitted, setUserSubmitted] = useState([])
    const [newFav, setNewFav] = useState([])
    const [addTryNew, setAddTryNew] = useState([])

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

    async function postNewFavorite() {
        try{ 
            const defaultValues = {
                recipe_id: id,
                name: name,
                thumbnail_url: thumbnail_url
            }
            let res = await axios.post("http://127.0.0.1:5000/api/user_favorites",
            defaultValues, {
                headers: {
                    Authorization: "Bearer " + token,
                  }})
                  console.log(res.data)
                  setNewFav(res.data)
        } catch (error) {
            console.log(error)
        }
    }; 

    async function postNewTryLater() {
        try{ 
            const defaultValues = {
                recipe_id: id,
                name: name,
                thumbnail_url: thumbnail_url
            }
            let res = await axios.post("http://127.0.0.1:5000/api/user_try_later",
            defaultValues, {
                headers: {
                    Authorization: "Bearer " + token,
                  }})
                  console.log(res.data)
                  setAddTryNew(res.data)
        } catch (error) {
            console.log(error)
        }
    }; 

    useEffect(() => {
    fetchSubmittedRecipes()
    }, []);

    return (
        <div>
            <h2>Other Chef's Creations</h2>
            <UserSubmittedList userSubmitted={userSubmitted} 
            newFav={newFav} postNewFavorite={postNewFavorite} 
            postNewTryLater={postNewTryLater} addTryNew={addTryNew} />
        </div>
     );
}
 
export default UserSubmittedPage;