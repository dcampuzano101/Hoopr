class AddPhotoFiletoPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :photo_file, :string
  end
end
