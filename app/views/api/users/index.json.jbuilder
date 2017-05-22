@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.profile_image_url user.profile_image_url
    json.header_image_url user.header_image_url
    json.description user.description
    json.followers user.followings.each do |following|
      json.id following.follower.id
      json.follow_id following.id
      json.username following.follower.username
    end
  end
end
