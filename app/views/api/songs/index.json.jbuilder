song_order = []
@songs.each do |song|
  song_order << song.id
  json.set! song.id do
    json.id song.id
    json.author_id song.author_id
    json.type song.type
    json.title song.title
    json.genre song.genre
    json.album song.album
    json.image_url song.image_url
    json.track_url song.track_url
    json.description song.description
    json.release_date song.release_date
    json.user do
      json.username song.user.username
      json.author_id song.user.id
      json.profile_image_url song.user.profile_image_url
    end
    json.number_of_comments song.comments.count
    json.favorites song.favorites.each do |favorite|
      json.id favorite.id
      json.user_id favorite.user_id
    end
  end
end
json.order song_order
