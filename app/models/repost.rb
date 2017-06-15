class Repost < ApplicationRecord
  validates :reposter_id, :song_id, presence: true

  belongs_to :reposter,
    class_name: :User,
    primary_key: :id,
    foreign_key: :reposter_id

  belongs_to :song,
    class_name: :Song,
    primary_key: :id,
    foreign_key: :song_id
    
end
