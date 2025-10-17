import { SET_CURRENT_SONG } from "../actions";

const initialState = {
  song: null,
};

const currentSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return { ...state, song: action.payload };
    default:
      return state;
  }
};

export default currentSongReducer;
