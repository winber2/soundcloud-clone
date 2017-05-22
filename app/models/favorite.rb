class Favorite < ApplicationRecord
  validates :favoritable_id, :favoritable_type, presence: true

  belongs_to :favoritable, polymorphic: true
end
