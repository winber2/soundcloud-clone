@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.author_id comment.author_id
    json.song_id comment.song_id
    json.body comment.body
    json.created_at comment.created_at
    json.user comment.user
  end
end
