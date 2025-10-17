import { TOGGLE_LIKE_SONG } from "../actions";

const initialState = {
  list: [],
};

const favoriteSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKE_SONG: {
      const exists = state.list.find((song) => song.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          list: state.list.filter((song) => song.id !== action.payload.id),
        };
      } else {
        return {
          ...state,
          list: [...state.list, action.payload],
        };
      }
    }
    default:
      return state;
  }
};

export default favoriteSongReducer;
