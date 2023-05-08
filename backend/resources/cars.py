from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Car
from database.schemas import car_schema, cars_schema


class AllCarResource(Resource):
    def get(self):
        cars = Car.query.all()
        make = request.args.get('make')
        if make:
            cars = Car.query.filter_by(make=make)
        return cars_schema.dump(cars), 200
    
class UserCarResource(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_cars = Car.query.filter_by(user_id=user_id)
        return cars_schema.dump(user_cars), 200
        # # Alternate version where JWT is used, but not required
        # try:
        #     verify_jwt_in_request()
        #     user_id = get_jwt_identity()
        # # Do stuff with token
        # except:
        # # Do stuff without token
        #     return "Unauthorized", 401

    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_car = car_schema.load(form_data)
        new_car.user_id = user_id
        db.session.add(new_car)
        db.session.commit()
        return car_schema.dump(new_car), 201
    

    
# ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
# app = Flask(__name__)
# app.config['UPLOAD_FOLDER'] = 'fileupload-react-flask/server/upload'
# class UserUploadImage(Resource):

#     @jwt_required
#     def post(self):
#         user_id = get_jwt_identity()
#         form_data = request.get_json()
#         file_upload = recipe_schema.load(form_data)
#         file_upload.user_id = user_id
#         filename = secure_filename(file_upload.filename)
#         file_upload.save(os.path.join(app.config[' UPLOAD_FOLDER'], filename))
#         db.session.add(file_upload)
#         db.session.commit()
#         return recipe_schema.dump(file_upload), 201
        
    # api.add_resource(UserUploadImage,  '/api/upload_image')
