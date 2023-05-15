from flask_marshmallow import Marshmallow
from marshmallow import post_load, fields
from database.models import User, Car, Recipe, Comment, Favorite, TryLater

ma = Marshmallow()

# Auth Schemas
class RegisterSchema(ma.Schema):
    """
    Schema used for registration, includes password
    """
    id = fields.Integer(primary_key=True)
    username = fields.String(required=True)
    password = fields.String(required=True)
    first_name = fields.String(required=True)
    last_name = fields.String(required=True)
    email = fields.String(required=True)
    class Meta:
        fields = ("id", "username",  "password", "first_name", "last_name", "email")

    @post_load
    def create_user(self, data, **kwargs):
        return User(**data)
    
class UserSchema(ma.Schema):
    """
    Schema used for displaying users, does NOT include password
    """
    id = fields.Integer(primary_key=True)
    username = fields.String(required=True)
    first_name = fields.String(required=True)
    last_name = fields.String(required=True)
    email = fields.String(required=True)
    class Meta:
        fields = ("id", "username", "first_name", "last_name", "email",)

register_schema = RegisterSchema()
user_schema = UserSchema()
users_schema = UserSchema(many=True)


# Car Schemas
class CarSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    make = fields.String(required=True)
    model = fields.String(required=True)
    year = fields.Integer()
    user_id = fields.Integer()
    user = ma.Nested(UserSchema, many=False)
    class Meta:
        fields = ("id", "make", "model", "year", "user_id", "user")
    
    @post_load
    def create_car(self, data, **kwargs):
        return Car(**data)

car_schema = CarSchema()
cars_schema = CarSchema(many=True)


# TODO: Add your schemas below
class RecipeSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    name = fields.String(required=True)
    ingredients = fields.String(nullable=False)
    instructions = fields.String(nullable=False)
    category = fields.String()
    ethnicity = fields.String()
    image_url = fields.String()
    user_id = fields.Integer()
    user = ma.Nested(UserSchema, many=False)
    class Meta:
        fields = ("id", "name", "ingredients", "instructions", "category", "ethnicity", "image_url", "user_id", "user")

    @post_load
    def create_recipe(self, data, **kwargs):
        return Recipe(**data)

recipe_schema = RecipeSchema()
recipes_schema = RecipeSchema(many=True)


class CommentSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    recipe_id = fields.Integer(required=True)
    text = fields.String(required=True)
    rating = fields.Integer(required=True)
    user_id = fields.Integer()
    user = ma.Nested(UserSchema, many=False)
    class Meta:
        fields = ("id", "recipe_id", "text", "rating", "user_id", "user")

    @post_load
    def create_comment(self, data, **kwargs):
        return Comment(**data)
    
comment_schema = CommentSchema()
comments_schema = CommentSchema(many=True)


class FavoriteSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    recipe_id = fields.Integer(required=True)
    name = fields.String(required=True)
    thumbnail_url = fields.String()
    user_id = fields.Integer()
    user = ma.Nested(UserSchema, many=False)
    class Meta:
        fields = ("id", "recipe_id", "name", "thumbnail_url", "user_id", "user")

    @post_load
    def create_favorite(self, data, **kwargs):
        return Favorite(**data)
    
favorite_schema = FavoriteSchema()
favorites_schema = FavoriteSchema(many=True) 
    

class TryLaterSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    recipe_id = fields.Integer(required=True)
    name = fields.String(required=True)
    thumbnail_url = fields.String()
    user_id = fields.Integer()
    user = ma.Nested(UserSchema, many=False)
    class Meta:
        fields = ("id", "recipe_id", "name", "thumbnail_url", "user_id", "user")

    @post_load
    def create_try_later(self, data, **kwargs):
        return TryLater(**data)
    
try_later_schema = TryLaterSchema()
try_laters_schema = TryLaterSchema(many=True)

