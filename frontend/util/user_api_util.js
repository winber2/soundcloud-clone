export const fetchUser = user => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user}`
  })
);

export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: {user}
  })
);

export const deleteUser = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${id}`
  })
);
