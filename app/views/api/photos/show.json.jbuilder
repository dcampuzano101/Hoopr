json.photo do
    json.extract! @photo, :id, :description, :business_id, :user_id
end
    
json.business do
    json.extract! @photo.business, :id, :name, :owner_id, :email, :price_range, :latitude, :longitude, :neighborhood, :website, :address, :rating, :court_type, :start_time, :end_time, :website
  
    json.photoIds @photo.business.photo_ids
end

json.user do
    json.extract! @photo.user, :id, :first_name, :last_name, :email, :zip_code, :profile_photo
  
    json.photoIds @photo.user.photo_ids
end