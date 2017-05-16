export const fetchSongs = () => (
  $.ajax({
    method: 'GET',
    url: 'api/songs'
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

export const updateSong = id => (
  $.ajax({
    method: 'PATCH',
    url: `api/songs/${id}`
  })
);