import { SET_SEARCH_RESULTS } from "../actions";

const initialState = {
  list: [],
  query: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        list: action.payload.songs,
        query: action.payload.query,
      };
    default:
      return state;
  }
};

export default searchReducer;
