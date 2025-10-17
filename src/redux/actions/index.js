export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const TOGGLE_LIKE_SONG = "TOGGLE_LIKE_SONG";
export const SET_SECTION_SONGS = "SET_SECTION_SONGS";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

//Action

//Aggiorniamo la canzone che va messa nel player
export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});

//like e leva like sulla canzone, ovvero il toggle, volevo dire dislike ma non credo esista come termine xD
export const toggleLikeSong = (song) => ({
  type: TOGGLE_LIKE_SONG,
  payload: song,
});

//sezione dedicata ai brani/album statici
export const setSectionSongs = (sections) => ({
  type: SET_SECTION_SONGS,
  payload: { sections },
});

//sezione dedicata alla ricerca
export const setSearchResults = (songs, query) => ({
  type: SET_SEARCH_RESULTS,
  payload: {
    songs,
    query,
  },
});

//fetch per la ricerca
export const getSongsByQuery = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      const { data } = await response.json();
      dispatch(setSearchResults(data.slice(0, 4), query));
    } catch (error) {
      console.error(error);
    }
  };
};
