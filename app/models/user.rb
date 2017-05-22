class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, message: 'must be at least 6 characters'}, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :songs,
    class_name: :Song,
    foreign_key: :author_id,
    primary_key: :id

  has_many :comments,
    class_name: :Comment,
    foreign_key: :author_id,
    primary_key: :id

  has_many :favorites,
    class_name: :Favorite,
    foreign_key: :user_id,
    primary_key: :id

  has_many :followings,
    class_name: :Follow,
    foreign_key: :artist_id,
    primary_key: :id

  has_many :follows,
    class_name: :Follow,
    foreign_key: :follower_id,
    primary_key: :id

  has_many :followers,
    through: :followings,
    source: :follower

  has_many :followed_artists,
    through: :follows,
    source: :artist

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_user_credentials(username, password)
    user = User.find_by(username: username)
    return user if (user && user.password?(password))
    nil
  end

  def password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

end
