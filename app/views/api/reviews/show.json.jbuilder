# json.extract! @review, :id, :body, :rating, :business_id, :user_id

# json.user @review.user, :first_name, :last_name


json.reviews do
  json.set! @review.id do
    json.extract! @review, :id, :body, :rating, :business_id, :user_id
  end
end

json.user do
  json.set! @review.user.id do
    json.partial! "api/users/user", user: @review.user
  end
end