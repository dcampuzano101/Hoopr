class Photo < ApplicationRecord
    belongs_to :business
    belongs_to :user

    has_many_attached :images
end
