export const repostSong = (userId, songId) => (
  $.ajax({
    method: 'POST',
    url: 'api/reposts',
    data: {
      repost: {
        reposter_id: userId,
        song_id: songId
      }
    }
  })
);

export const deleteRepost = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/reposts/${id}`
  })
);
