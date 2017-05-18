@songs.each do |song|
  json.set! song.id do
    json.id song.id
    json.title song.title
    json.genre song.genre
    json.album song.album
    json.image_url song.image_url
    json.track_url song.track_url
    json.release_date song.release_date
    json.user do
      json.username song.user.username
      json.author_id song.user.id
      json.profile_image_url song.user.profile_image_url
    end
  end
end
