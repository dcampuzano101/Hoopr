class RemoveTelephoneFromBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :telephone, :integer
    add_column :businesses, :telephone, :string
  end
end
