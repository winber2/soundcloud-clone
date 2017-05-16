json.songs @songs do |song|
  json.set! song.id do
    json.id song.id
    json.author_id song.author_id
    json.genre song.genre
    json.album song.album
    json.image_url song.image_url
    json.track_url song.track_url
    json.release_date song.release_date
  end
end
