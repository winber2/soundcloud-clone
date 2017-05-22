class Follow < ApplicationRecord
  validates :follower_id, :artist_id, presence: true

  belongs_to :artist,
    class_name: :User,
    foreign_key: :artist_id,
    primary_key: :id

  belongs_to :follower,
    class_name: :User,
    foreign_key: :follower_id,
    primary_key: :id
end
