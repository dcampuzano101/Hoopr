reviews = []

json.users do
  @users.each do |user|
      # json.set! business.id do
      # json.partial! 'business', business: business
      # json.reviewIds []
    # end
    json.set! user.id do
      json.extract! user, :id, :email, :first_name, :last_name, :profile_photo

      json.reviewIds user.review_ids

      if user.profile_photo.attached?
        json.profilePhotoUrl url_for(user.profile_photo)
      end
    end
    reviews.concat(user.reviews)
  end
end

# reviews = [];

# json.users do
#   users.each do |review|
#     json.set! review.id do
#       json.extract! review, :id, :body, :rating, :business_id, :user_id
#     end

#     reviews.push(review.user)
#   end
# end

# json.set! :users do
#   users.each do |user|
#     json.set! user.id do
#       json.extract! user, :id, :email, :first_name, :last_name
#     end
#   end
# end