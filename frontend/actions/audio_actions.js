export const RECEIVE_AUDIO = "RECEIVE_AUDIO";
export const RECEIVE_PLAYER = "RECEIVE_PLAYER";

export const receiveAudio = (song) => ({
  type: RECEIVE_AUDIO,
  song
});

export const receivePlayer = player => ({
  type: RECEIVE_PLAYER,
  player
});
