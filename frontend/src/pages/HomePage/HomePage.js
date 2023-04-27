import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:5000/api/user_cars", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className="container">
      {console.log(user)}
      <h1>{user.username}'s Page!</h1>
      {/* {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))} */}
        <div>
          <ul>
            <li>
              <Link to='/totry'>
                <img src="icons8-bookmark-100.png" alt="bookmark" />
                <br />
                <b>Creations To Try</b>
              </Link>
            </li>
            <li>
              <Link to='/favorites'>
                <img src="icons8-favorite-100.png" alt="heart" />
                <br />
                <b>Favorites</b>
              </Link>
            </li>
            <li>
              <Link to='/add'>
                <img src="icons8-add-new-100.png" alt="plus" />
                <br />
                <b>Add Creation</b>
              </Link>
            </li>
            <li>
              <Link to='/submitted'>
                <img src="icons8-google-web-search-100.png" alt="search glass" />
                <br />
                <b>Other Chef's Creation's</b>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default HomePage;
