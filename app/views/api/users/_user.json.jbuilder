json.extract! user, :id, :username, :profile_image_url, :header_image_url, :description
json.songs do
  user.songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.author_id song.author_id
      json.title song.title
      json.genre song.genre
      json.album song.album
      json.image_url song.image_url
      json.track_url song.track_url
      json.description song.description
      json.release_date song.release_date
      json.number_of_comments song.comments.length
      json.type song.type
      json.favorites song.favorites.each do |favorite|
        json.id favorite.id
        json.user_id favorite.user_id
      end
    end
  end
end
json.reposts do
  user.reposted_songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.author_id song.author_id
      json.title song.title
      json.genre song.genre
      json.album song.album
      json.image_url song.image_url
      json.track_url song.track_url
      json.description song.description
      json.release_date song.release_date
      json.number_of_comments song.comments.length
      json.type song.type
      json.favorites song.favorites.each do |favorite|
        json.id favorite.id
        json.user_id favorite.user_id
      end
      json.reposts song.reposts.each do |repost|
        json.id repost.id
        json.reposter_id repost.reposter_id
        json.song_id repost.song_id
      end
      json.user do
        json.author_id song.user.id
        json.username song.user.username
      end
    end
  end
end
json.followers user.followings.each do |following|
  json.id following.follower.id
  json.follow_id following.id
  json.username following.follower.username
end
