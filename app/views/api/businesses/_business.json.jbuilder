# json.extract! business, :id, :name, :owner_id, :email, :price_range, :latitude, :longitude, :neighborhood, :website, :address, :rating, :court_type, :start_time, :end_time, :website

# json.reviewIds business.review_ids
ratingsNums = [];

json.business do 
  business.reviews.each do |review|
    ratingsNums.push(review.rating)
  end
end

json.business do
  json.extract! business, :id, :name, :owner_id, :email, :price_range, :latitude, :longitude, :neighborhood, :website, :address, :rating, :court_type, :start_time, :end_time, :website

  json.reviewIds business.review_ids

  json.ratings ratingsNums
end

users = [];

json.set! :reviews do
  business.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :rating, :business_id, :user_id
    end

    users.push(review.user)
  end
end

json.set! :users do
  users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :email, :first_name, :last_name
    end
  end
end

# ratings = [];

# json.business do 
#   json.set! :ratings do
#     business.reviews.each do |review|
#       json.extract! review, :rating
#     end
#   end
# end


