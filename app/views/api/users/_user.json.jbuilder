json.extract! user, :id, :email, :first_name, :last_name, :profile_photo

if user.profile_photo.attached?
    json.profilePhotoUrl url_for(user.profile_photo)
end
