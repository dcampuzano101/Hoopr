@businesses.each do |business|
  json.set! business.id do
    json.partial! 'business', business: business
    json.reviewIds []
  end
end