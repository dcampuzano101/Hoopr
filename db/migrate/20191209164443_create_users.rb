class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, unique: true, null: false
      t.string :password_digest, null: false
      t.string :session_token
      t.string :email, unique: true, null: false

      t.float :latitude
      t.float :longitude
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :zip_code, null: false
      t.date :birthday

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index  :users, :session_token, unique: true
  end
end
