from flask import Flask, request, current_app

from werkzeug.utils import secure_filename
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Recipe, Comment, Favorite, TryLater
from database.schemas import recipe_schema, recipes_schema, comment_schema, comments_schema, favorite_schema, favorites_schema, try_later_schema,try_laters_schema

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
# app = Flask(__name__)
# app_root = os.path.dirname(os.path.abspath(__file__))
# upload_folder = os.path.join(app_root, "upload")
# app.config['UPLOAD_FOLDER'] = upload_folder

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
        file_upload = request.files['image_url']
        filename = secure_filename(file_upload.filename)
        destination = "/".join([current_app.config['UPLOAD_FOLDER'], filename])
        file_upload.save(destination)
        form_data = {
            'name': request.form.get("name"),
            'ingredients': request.form.get("ingredients"),
            'instructions': request.form.get("instructions"),
            'category': request.form.get("category"),
            'ethnicity': request.form.get("ethnicity")
        }
        new_recipe = recipe_schema.load(form_data)
        new_recipe.user_id = user_id
        new_recipe.image_url = filename
        db.session.add(new_recipe)
        db.session.commit()        
        return recipe_schema.dump(new_recipe), 201

class UserEditRecipeResource(Resource):
    @jwt_required()
    def get(self, id):
        user_id = get_jwt_identity()
        edit_list = Recipe.query.filter_by(id=id)

        for item in edit_list:
            custom_response = {
                "id": item.id,
                "name": item.name,
                "instructions": item.instructions,
                "ingredients": item.ingredients,
                "category": item.category,
                "ethnicity": item.ethnicity
            }
        return recipe_schema.dump(custom_response), 200
    
class UserRecipeResource(Resource):
    def get(self, recipe_id):
        comment_list = Comment.query.filter_by(recipe_id=recipe_id).all()
        comments = []
        ratings = []
        for comment in comment_list:
            comments.append(comment)
            ratings.append(comment.rating)
        if len(ratings) > 0:
            average_rating = sum(ratings) / len(ratings)
        else:
            average_rating = "N/A"
        custom_response = {
            "reviews": comments_schema.dump(comments),
            "average_rating": average_rating,
        }
        return custom_response, 200
    
    @jwt_required()
    def put(self, recipe_id):
        user_id = get_jwt_identity()
        edit_recipe = Recipe.query.get_or_404(recipe_id)
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
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_comment = comment_schema.load(form_data)
        new_comment.user_id = user_id
        db.session.add(new_comment)
        db.session.commit()
        return recipe_schema.dump(new_comment), 201

class UserCommentListResource(Resource):
    @jwt_required()
    def put(self, comment_id):
        user_id = get_jwt_identity()
        edit_comment = Comment.query.get_or_404(comment_id)
        if "comment_id" in request.json:
            edit_comment.comment_id=request.json["comment_id"]
        if "text" in request.json:
            edit_comment.text=request.json["text"]
        if "rating" in request.json:
            edit_comment.rating=request.json["rating"]
        db.session.commit()
        return comment_schema.dump(edit_comment), 200
        
    @jwt_required()
    def delete(self, comment_id):
        user_id = get_jwt_identity()
        delete_comment = Comment.query.get_or_404(comment_id)
        db.session.delete(delete_comment)
        db.session.commit()
        return '', 204

class UserFavoritesResource(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_favorites = Favorite.query.filter_by(user_id=user_id)
        return favorites_schema.dump(user_favorites), 200
        
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_favorite = favorite_schema.load(form_data)
        new_favorite.user_id = user_id
        db.session.add(new_favorite)
        db.session.commit()
        return favorite_schema.dump(new_favorite), 201

class UserFavoriteListResource(Resource):
    @jwt_required()
    def delete(self, favorite_id):
        user_id = get_jwt_identity()
        delete_favorite = Favorite.query.get_or_404(favorite_id)
        db.session.delete(delete_favorite)
        db.session.commit()
        return '', 204

class UserTryLaterResource(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_try_later = TryLater.query.filter_by(user_id=user_id)
        return try_laters_schema.dump(user_try_later), 200
    
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_try_later = try_later_schema.load(form_data)
        new_try_later.user_id = user_id
        db.session.add(new_try_later)
        db.session.commit()
        return try_later_schema.dump(new_try_later), 201
    
class UserTryLaterListResource(Resource):
    @jwt_required()
    def delete(self, try_later_id):
        user_id = get_jwt_identity()
        delete_try_later = TryLater.query.get_or_404(try_later_id)
        db.session.delete(delete_try_later)
        db.session.commit()
        return '', 204
