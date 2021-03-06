class Comment < ApplicationRecord
  validates :author_id, :song_id, presence: true
  validates :body, length: { minimum: 1, message: 'must be at least 1 character' }

  belongs_to :song,
    class_name: :Song,
    foreign_key: :song_id,
    primary_key: :id


  belongs_to :user,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

end
