class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.integer :owner_id
      t.string :email, null: false
      t.string :price_range, null: false
      t.float :latitude
      t.float :longitude
      t.integer :telephone
      t.string :website
      t.string :address

      t.timestamps
    end
    add_index :businesses, :owner_id
    add_index :businesses, :id 
  end
end
