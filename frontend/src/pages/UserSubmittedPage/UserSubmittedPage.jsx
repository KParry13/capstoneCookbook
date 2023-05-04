import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import UserSubmittedList from "../../components/UserSubmittedList/UserSubmittedList";

const UserSubmittedPage = () => {
    const [user, token] = useAuth();
    const [userSubmitted, setUserSubmitted] = useState([])
    const [newFav, setNewFav] = useState({
        "ingredients": "5 tablespoons soy sauce, ¼ cup chopped green onion, 2 ½ tablespoons white sugar, 2 tablespoons minced garlic, 2 tablespoons sesame seeds, 2 tablespoons sesame oil, ½ teaspoon ground black pepper, 1 pound flank steak, thinly sliced",
        "ethnicity": "Korean",
        "user_id": 1,
        "name": "Beef Bulgogi",
        "user": {
            "first_name": "Gordon",
            "email": "gordon@gordon.gordon",
            "username": "gordon",
            "id": 1,
            "last_name": "Ramsay"
        },
        "id": 2,
        "instructions": "Whisk soy sauce, green onion, sugar, garlic, sesame seeds, sesame oil, and pepper together in a bowl. Place flank steak slices in a shallow dish. Pour marinade over top. Cover and refrigerate for at least 1 hour or overnight. Preheat an outdoor grill for high heat, and lightly oil the grate. Quickly grill flank steak slices on the preheated grill until slightly charred and cooked through, 1 to 2 minutes per side.",
        "category": "Beef"
    })
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
                recipe_id: newFav.id,
                name: newFav.name,
                thumbnail_url: newFav.thumbnail_url
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
                recipe_id: newFav.id,
                name: newFav.name,
                thumbnail_url: newFav.thumbnail_url
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
            postNewTryLater={postNewTryLater} addTryNew={addTryNew} 
            />
        </div>
     );
}
 
export default UserSubmittedPage;