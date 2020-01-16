# json.extract! @review, :id, :body, :rating, :business_id, :user_id

# json.user @review.user, :first_name, :last_name


json.review do
  # json.set! @review.id do
    json.extract! @review, :id, :body, :rating, :business_id, :user_id
  # end
end

# json.user do
#   # json.set! @review.user.id do
#     json.partial! "api/users/user", user: @review.user
#   # end
# end

json.business do
  # json.partial! "api/businesses/business", business: @review.business
  json.extract! @review.business, :id, :name, :owner_id, :email, :price_range, :latitude, :longitude, :neighborhood, :website, :address, :rating, :court_type, :start_time, :end_time, :website

  json.reviewIds @review.business.review_ids
end