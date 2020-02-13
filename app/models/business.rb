# == Schema Information
#
# Table name: businesses
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  owner_id    :integer
#  email       :string           not null
#  price_range :string           not null
#  latitude    :float
#  longitude   :float
#  website     :string
#  address     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  rating      :integer
#  court_type  :string
#  start_time  :string
#  end_time    :string
#  telephone   :string
#

class Business < ApplicationRecord

  validates :name, presence: true
  validates :email, presence: true
  validates :price_range, presence: true
  validates :neighborhood, presence: true

  belongs_to :owner,
    class_name: 'User'

  has_many :reviews

  has_many_attached :photos
  

end
