export const fetchUser = user => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user}`
  })
);

export const fetchUsers = query => {
  if (query === undefined) query = {};
  return $.ajax({
    method: 'GET',
    url: `api/users`,
    data: {
      query: query.query,
      user_id: query.user_id,
      search: query.search,
      follower: query.follower
    }
  });
};

export const updateUser = (user, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: user
  })
);

export const deleteUser = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${id}`
  })
);
