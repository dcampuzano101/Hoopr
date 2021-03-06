json.searchResult do
    json.query @query
    json.businessIds @businesses.pluck(:id)
end

json.businesses do
    @businesses.each do |business|
        json.set! business.id do
            json.partial! 'api/businesses/business', business: business
        end
    end
end