export const fetchSongs = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/songs',
    data: {
      query: query
      search: query
    }
  })
);

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
