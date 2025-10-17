import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentSongReducer from "../reducers/currentSongReducer";
import favoriteSongReducer from "../reducers/favoriteSongReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  currentSong: currentSongReducer,
  favoriteSongs: favoriteSongReducer,
  searchResults: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
