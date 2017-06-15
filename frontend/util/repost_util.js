export const repostSong = (repost) => (
  $.ajax({
    method: 'POST',
    url: 'api/reposts',
    data: { repost }
  })
);

export const deleteRepost = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/reposts/${id}`
  })
);
