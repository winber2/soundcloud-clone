class Song < ApplicationRecord
  has_attached_file :image_url,
    default_url: "https://s3-us-west-1.amazonaws.com/fuckcloudinary/1111111111111111111111111111111111111111111.jpg",
    s3_protocol: :https
  has_attached_file :track_url,
    default_url: "https://s3-us-west-1.amazonaws.com/fuckcloudinary/ONE+OK++ROCK+-+The+Beginning.mp3",
    s3_protocol: :https
  validates_attachment_content_type :image_url, content_type: /\Aimage\/.*\Z/
  validates_attachment_content_type :track_url, content_type: /\Aaudio\/.*\Z/
  
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
