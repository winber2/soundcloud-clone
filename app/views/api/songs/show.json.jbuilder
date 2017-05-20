json.extract! @song, :id, :title, :genre, :album, :description, :image_url, :track_url, :release_date
json.user do
  json.author_id @song.user.id
  json.username @song.user.username
  json.profile_image_url @song.user.profile_image_url
end
json.number_of_comments @song.comments.count
