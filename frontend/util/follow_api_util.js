export const followUser = (currentUser, user) => (
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

export const unfollowUser = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`
  })
);
