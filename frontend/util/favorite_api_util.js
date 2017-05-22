export const createFavorite = (user, favoritable) => (
  $.ajax({
    method: 'POST',
    url: `api/favorites`,
    data: {
      favorite: {
        user_id: user.id,
        favoritable_type: favoritable.type,
        favoritable_id: favoritable.id
      }
    }
  })
);

export const deleteFavorite = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/favorites/${id}`
  })
);
