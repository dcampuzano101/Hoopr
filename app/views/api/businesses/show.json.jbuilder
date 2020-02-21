json.partial! '/api/businesses/business', business: @business

photos = [];
photos.concat(@business.photos)

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
  # json.reviewIds @business.reviews.pluck(:id)

# @business.reviews.includes(:author).each do |review|
#   json.reviews do
#     json.set! review.id do
#       json.partial! 'api/reviews/review', review: review
#     end
#   end

#   json.authors do
#     json.set! review.author.id do
#       json.extract! review.author, :id, :username
#     end
#   end
# end
#change username to email
