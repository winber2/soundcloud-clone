@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.profile_image_url user.profile_image_url
    json.header_image_url user.header_image_url
    json.description user.description
  end
  json.followers user.followers.each do |follower|
    json.id follower.id
    json.username follower.username
  end
end
