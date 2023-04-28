// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import UserSubmitted from "./pages/UserSubmitted/UserSubmitted";
import RecipesToTry from "./pages/RecipesToTry/RecipesToTry";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import AddRecipePage from "./pages/AddRecipePage/AddRecipePage";
import RecipeInfoPage from "./pages/RecipeInfoPage/RecipeInfoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import RecipeCommentForm from "./components/RecipeCommentForm/RecipeCommentForm";
import RecipeInfo from "./components/RecipeInfo/RecipeInfo";
import RecipeResultsList from "./components/RecipeResultsList/RecipeResultsList";
import RecipesToTryList from "./components/RecipesToTryList/RecipesToTry";
import SearchBar from "./components/SearchBar/SearchBar";
import UserSubmittedList from "./components/UserSubmittedList/UserSubmittedList";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route 
          path="/submitted"
          element={
            <PrivateRoute>
              <UserSubmitted />
            </PrivateRoute>
          }
          />
          <Route
            path="/totry"
            element={
              <PrivateRoute>
                <RecipesToTry />
              </PrivateRoute>
            }
            />
            <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
            />  
            <Route
            path="/add"
            element={
              <PrivateRoute>
                <AddRecipePage />
              </PrivateRoute>
            }
            />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/recipe/:recipeIdMeal" element={<RecipeInfoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
