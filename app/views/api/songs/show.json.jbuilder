json.extract! @song, :id, :title, :genre, :album, :image_url, :track_url, :release_date
json.user do
  json.author_id @song.user.id
  json.username @song.user.username
end
