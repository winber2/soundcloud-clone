class Song < ApplicationRecord
  validates :image_url, :track_url, :title, :author_id, :genre, presence: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  has_many :comments

  has_many :favorites, as: :favoritable
end
