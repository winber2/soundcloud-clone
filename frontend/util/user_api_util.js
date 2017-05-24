export const fetchUser = user => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user}`
  })
);

export const fetchUsers = query => {
  if (query === undefined) query = {};
  debugger;
  return $.ajax({
    method: 'GET',
    url: `api/users`,
    data: {
      query: query.query,
      search: query.search
    }
  })
};

export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user}
  })
);

export const deleteUser = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${id}`
  })
);
