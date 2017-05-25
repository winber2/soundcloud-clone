export const fetchSongs = (query) => {
  if (query === undefined) query = {};
  return $.ajax({
    method: 'GET',
    url: 'api/songs',
    data: {
      query: query.query,
      search: query.search,
      user: query.user,
      user_id: query.user_id,
      offset: query.offset,
      username: query.username
    }
  });
};

export const fetchSingleSong = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/songs/${id}`
  })
);

export const createSong = (song) => (
  $.ajax({
    method: 'POST',
    url: 'api/songs',
    data: {song}
  })
);

export const deleteSong = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/songs/${id}`
  })
);

export const updateSong = song => (
  $.ajax({
    method: 'PATCH',
    url: `api/songs/${song.id}`,
    data: {song}
  })
);
