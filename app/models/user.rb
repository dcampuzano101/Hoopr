class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true
  validates :password, length: { minimum: 6}, allow_nil: true 


  after_initialize :ensure_session_token

  attr_reader :password

  #FIGVAPER -> findbycredentials, ispassword, validations, attr_reader, password, ensuresessiontoken, resetsessiontoken


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
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
    self.save
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save
    self.session_token
  end

end