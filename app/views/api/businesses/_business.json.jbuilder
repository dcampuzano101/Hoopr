json.extract! business, :id, :name, :owner_id, :email, :price_range, :latitude, :longitude, :telephone, :website, :address, :rating, :court_type, :start_time, :end_time, :website

json.reviewIds business.review_ids

json.reviews business.reviews
