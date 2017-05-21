export const selectSong = state => (
  state.songs
);

export const selectUser = (state, ownProps) => {
  let name = ownProps.match.params.username;
  for (let key in state.users) {
    if (state.users[key].username === name) {
      return state.users[key];
    }
  };
  return {};
};
