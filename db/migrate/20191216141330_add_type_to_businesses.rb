class AddTypeToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :type, :string
  end
end
