export const RECEIVE_AUDIO = "RECEIVE_AUDIO";
export const RECEIVE_PLAYER = "RECEIVE_PLAYER";

export const receiveAudio = (audio) => ({
  type: RECEIVE_AUDIO,
  audio
});

export const receivePlayer = audio => ({
  type: RECEIVE_PLAYER,
  audio
});
