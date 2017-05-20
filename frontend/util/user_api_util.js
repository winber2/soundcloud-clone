export const fetchUser = user => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user}`
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: `api/users`
  })
)

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
