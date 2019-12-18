# json.extract! business, :id, :name, :owner_id, :email, :price_range, :latitude, :longitude, :telephone, :website, :address, :rating, :court_type, :start_time, :end_time, :website

# json.reviewIds business.review_ids


json.business do
  json.extract! business, :id, :name, :owner_id, :email, :price_range, :latitude, :longitude, :telephone, :website, :address, :rating, :court_type, :start_time, :end_time, :website

  json.reviewIds business.review_ids
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



