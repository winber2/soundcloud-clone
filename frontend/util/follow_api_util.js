export const FollowUser = (currentUser, user) => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: {
      follow: {
        follower_id: currentUser.id,
        artist_id: user.id
      }
    }
  })
);

export const UnfollowUser = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`
  })
);
