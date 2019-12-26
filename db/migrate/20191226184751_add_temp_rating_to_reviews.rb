class AddTempRatingToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :temp_rating, :integer
  end
end
