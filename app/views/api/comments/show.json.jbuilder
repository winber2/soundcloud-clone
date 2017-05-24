json.extract! @comment, :id, :author_id, :song_id, :body, :created_at
json.user do
  json.id @comment.user.id
  json.username @comment.user.username
  json.profile_image_url @comment.user.profile_image_url
end
