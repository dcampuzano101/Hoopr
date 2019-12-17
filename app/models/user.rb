# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :string           not null
#  session_token   :string
#  email           :string           not null
#  latitude        :float
#  longitude       :float
#  first_name      :string           not null
#  last_name       :string           not null
#  zip_code        :integer          not null
#  birthday        :date
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true
  validates :password, length: { minimum: 6}, allow_nil: true
  validates :zip_code, presence: true 


  after_initialize :ensure_session_token

  attr_reader :password

  #FIGVAPER -> findbycredentials, ispassword, validations, attr_reader, password, ensuresessiontoken, resetsessiontoken


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcp = BCrypt::Password.new(self.password_digest)
    bcp.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save
    self.session_token
  end

  has_many :reviews
  

end
