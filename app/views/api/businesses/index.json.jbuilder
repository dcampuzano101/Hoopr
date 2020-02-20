reviews = []
photos = []

json.businesses do
  @businesses.each do |business|
      # json.set! business.id do
      # json.partial! 'business', business: business
      # json.reviewIds []
    # end
    json.set! business.id do
      json.extract! business, :id, :name, :owner_id, :email, :price_range, :latitude, :longitude, :neighborhood, :website, :address, :rating, :court_type, :start_time, :end_time, :website
      
      json.reviewIds business.reviews.pluck(:id)
    end
    reviews.concat(business.reviews)
    photos.concat(business.photos)
  end
end

users = [];
json.photos do
  photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :business_id, :user_id, :description

      if photo.photo_file.attached?
        json.photoUrl url_for(photo.photo_file)
      end
    end
  end
end

json.reviews do
  reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :rating, :business_id, :user_id
    end

    users.push(review.user)
  end
end

json.set! :users do
  users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :email, :first_name, :last_name, :profile_photo
      
      if user.profile_photo.attached?
        json.profilePhotoUrl url_for(user.profile_photo)
      end
      
    end
  end
end