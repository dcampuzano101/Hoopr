class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, unique: true, null: false
      t.string :password_digest, null: false
      t.string :session_token
      t.float :latitude
      t.float :longitude

      t.timestamps
    end

  end
end
