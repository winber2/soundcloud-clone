json.extract! @song, :id, :title, :author_id, :genre, :album, :description, :release_date, :type
json.image_url @song.image_url.url
json.track_url @song.track_url.url
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
json.number_of_comments @song.comments.length
json.favorites @song.favorites.each do |favorite|
  json.id favorite.id
  json.user_id favorite.user_id
end
json.reposts @song.reposts.each do |repost|
  json.id repost.id
  json.reposter_id repost.reposter_id
  json.song_id repost.song_id
end
