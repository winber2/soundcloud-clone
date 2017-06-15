class Song < ApplicationRecord
  validates :image_url, :track_url, :title, :author_id, :genre, presence: true
  validates :type, presence: true
  validate :ensure_type

  belongs_to :user,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  has_many :comments

  has_many :reposts,
    class_name: :Repost,
    foreign_key: :song_id,
    primary_key: :id

  has_many :favorites, as: :favoritable

  def ensure_type
    self.type = 'Song'
  end

end
