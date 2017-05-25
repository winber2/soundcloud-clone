json.extract! @song, :id, :title, :genre, :album, :description, :image_url, :track_url, :release_date, :type
json.user do
  json.id @song.user.id
  json.username @song.user.username
  json.profile_image_url @song.user.profile_image_url
  json.followers @song.user.followings.each do |following|
    json.id following.follower.id
    json.follow_id following.id
    json.username following.follower.username
  end
end
json.number_of_comments @song.comments.count
json.favorites @song.favorites.each do |favorite|
  json.id favorite.id
  json.user_id favorite.user_id
end
