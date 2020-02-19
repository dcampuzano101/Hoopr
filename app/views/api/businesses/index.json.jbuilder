reviews = []

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
  end
end

users = [];

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
      json.extract! user, :id, :email, :first_name, :last_name
    end
  end
end