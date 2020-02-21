class AddBoroughToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :borough, :string
  end
end
