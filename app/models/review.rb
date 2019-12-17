# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  business_id :integer          not null
#  user_id     :integer          not null
#  rating      :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord 
  validates :body, presence: true
  validates :rating, inclusion: { in: (1..5) }


  belongs_to :business

  belongs_to :user

end

