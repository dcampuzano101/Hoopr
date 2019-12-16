class RemoveTypeFromBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :type, :string
    add_column :businesses, :court_type, :string
  end
end
