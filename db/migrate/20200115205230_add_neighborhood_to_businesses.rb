class AddNeighborhoodToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :neighborhood, :string
    remove_column :businesses, :telephone, :string
  end
end
