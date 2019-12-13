json.business do
  json.partial! '/api/businesses/business', business: @business
  # json.reviewIds @business.reviews.pluck(:id)
end

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
