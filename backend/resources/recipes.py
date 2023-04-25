from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Recipe, Comment, Favorite, TryLater
from database.schemas import recipe_schema, recipes_schema, comment_schema, comments_schema, favorite_schema, favorites_schema, try_later_schema,try_laters_schema

class AllRecipeResource(Resource):
    def get(self):
        recipes = Recipe.query.all()
        name = request.args.get('name')
        if name:
            recipes = Recipe.query.filter_by(name=name)
        return recipes_schema.dump(recipes)

class UserRecipeListResource(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_recipes = Recipe.query.filter_by(user_id=user_id)
        return recipes_schema.dump(user_recipes), 200
        
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_recipe = recipe_schema.load(form_data)
        new_recipe.user_id = user_id
        db.session.add(new_recipe)
        db.session.commit()
        return recipe_schema.dump(new_recipe), 201
    
class UserRecipeResource(Resource):
    @jwt_required()
    def put(self, recipe_id):
        user_id = get_jwt_identity()
        edit_recipe = Recipe.query.get_or_404(user_id, recipe_id)
        if "recipe_id" in request.json:
            edit_recipe.recipe_id=request.json["recipe_id"]
        if "name" in request.json:
            edit_recipe.name=request.json["name"]
        if "ingredients" in request.json:
            edit_recipe.ingredients=request.json["ingredients"]
        if "instructions" in request.json:
            edit_recipe.instructions=request.json["instructions"]
        if "category" in request.json:
            edit_recipe.category=request.json["category"]
        if "ethnicity" in request.json:
            edit_recipe.ethnicity=request.json["ethnicity"]
        db.session.commit()
        return recipe_schema.dump(edit_recipe), 200
        
    @jwt_required()
    def delete(self, recipe_id):
        user_id = get_jwt_identity()
        delete_recipe = Recipe.query.get_or_404(recipe_id)
        db.session.delete(delete_recipe)
        db.session.commit()
        return '', 204

class UserCommentsResource(Resource):
    def post(self):
        pass

class UserFavoritesResource(Resource):
    def get(self):
        pass

    def post(self):
        pass

    def delete(self):
        pass

class UserTryLaterResource(Resource):
    def get(self):
        pass

    def post(self):
        pass

    def delete(self):
        pass