class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :business_id, null: false
      t.integer :user_id, null: false
      t.text :description

      t.timestamps
    end
    add_index :photos, :business_id
    add_index :photos, :user_id
  end
end
