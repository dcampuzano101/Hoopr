
json.extract! user, :id, :email, :first_name, :last_name, :profile_photo

json.reviewIds user.review_ids

if user.profile_photo.attached?
    json.profilePhotoUrl url_for(user.profile_photo)
end
