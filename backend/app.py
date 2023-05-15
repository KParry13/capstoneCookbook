from flask import Flask
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_restful import Api
from flask_migrate import Migrate
from database.models import db
from database.schemas import ma
from resources.auth import LoginResource, RegisterResource
from resources.cars import AllCarResource, UserCarResource
from resources.recipes import AllRecipeResource, UserRecipeListResource, UserEditRecipeResource, UserRecipeResource, UserCommentsResource, UserCommentListResource, UserFavoritesResource, UserFavoriteListResource, UserTryLaterResource, UserTryLaterListResource
from dotenv import load_dotenv
from os import environ
import os

# Adds variables from .env file to environment
load_dotenv()

# Creates instances of additional libraries
bcrypt = Bcrypt()
jwt= JWTManager()
cors = CORS()
migrate = Migrate()

def create_app():
    """
    App factory that creates app instance
    """
    # Creates app instance
    app = Flask(__name__)

    # Loads config properties from .env file
    app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('SQLALCHEMY_DATABASE_URI')
    app.config['JWT_SECRET_KEY'] = environ.get('JWT_SECRET_KEY')
    app_root = os.path.dirname(os.path.abspath(__file__))
    upload_folder = os.path.join(app_root, "static/upload")
    app.config['UPLOAD_FOLDER'] = upload_folder

    # Registers all routes with API
    api = create_routes()

    # Registers Flask app with additional libraries created/imported above
    db.init_app(app)
    ma.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    cors.init_app(app)
    api.init_app(app)
    migrate.init_app(app, db)

    return app


def create_routes():
    """
    Creates Flask Restful instance and registers all Resource routes
    """
    api = Api()
    api.add_resource(RegisterResource, '/api/auth/register')
    api.add_resource(LoginResource, '/api/auth/login')
    api.add_resource(AllCarResource, '/api/cars')
    api.add_resource(UserCarResource, '/api/user_cars')
    # TODO: Create files for your Resources in resources folder, add them here
    api.add_resource(AllRecipeResource, '/api/recipes')
    api.add_resource(UserRecipeListResource, '/api/user_recipe')
    api.add_resource(UserEditRecipeResource, '/api/edit_recipe/<int:id>')
    api.add_resource(UserRecipeResource, '/api/recipes/<int:recipe_id>')
    api.add_resource( UserCommentsResource, '/api/user_comment')
    api.add_resource( UserCommentListResource, '/api/user_comment/<int:comment_id>')
    api.add_resource(UserFavoritesResource, '/api/user_favorites')
    api.add_resource(UserFavoriteListResource, '/api/user_favorites/<int:favorite_id>')
    api.add_resource(UserTryLaterResource, '/api/user_try_later')
    api.add_resource(UserTryLaterListResource, '/api/user_try_later/<int:try_later_id>')
    return api
