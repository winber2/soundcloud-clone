class Song < ApplicationRecord
  validates :image_url, :track_url, :title, :author_id, :genre, presence: true

  belongs_to :user
end
