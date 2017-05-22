json.extract! user, :id, :username, :profile_image_url, :header_image_url, :description
json.songs do
  user.songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.title song.title
      json.genre song.genre
      json.album song.album
      json.image_url song.image_url
      json.track_url song.track_url
      json.description song.description
      json.release_date song.release_date
      json.number_of_comments song.comments.count
    end
  end
end
json.followers user.followers.each do |follower|
  json.id follower.id
  json.username follower.username
end
