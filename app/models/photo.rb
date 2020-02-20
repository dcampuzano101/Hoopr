class Photo < ApplicationRecord
    belongs_to :business
    belongs_to :user

    has_one_attached :photo_file
end
