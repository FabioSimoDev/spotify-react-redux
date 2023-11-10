export const SET_SONGS = "SET_SONGS";
export const SET_ERROR = "SET_ERROR";
export const SET_PLAYING = "SET_PLAYING";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SET_LIKED_SONGS = "SET_LIKED_SONGS";
export const REMOVE_LIKED_SONG = "REMOVE_LIKED_SONG";

export const setSongs = (songs, section) => ({
  type: SET_SONGS,
  payload: { songs, section }
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query
});

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: { results }
});

export const setLikedSongs = (song) => ({
  type: SET_LIKED_SONGS,
  payload: song
});

export const removeLikedSong = (song) => ({
  type: REMOVE_LIKED_SONG,
  payload: song
});

export const setPlaying = (song) => ({
  type: SET_PLAYING,
  payload: song
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: { error }
});

export const fetchSongs =
  (artistName, section = undefined, songsMax = undefined) =>
  async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0"
          }
        }
      );
      if (!response.ok)
        throw new Error(
          "Network errore non so cosa scrivere per sembrare professionale"
        );

      let { data } = await response.json();
      if (songsMax && data.length > songsMax) {
        data = data.slice(0, 4);
        console.log("fatto.", data, data.length, songsMax);
      }
      dispatch(setSongs(data, section));

      console.log("provo");
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

export const searchFetch =
  (artistName, songsMax = undefined) =>
  async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0"
          }
        }
      );
      if (!response.ok)
        throw new Error(
          "Network errore non so cosa scrivere per sembrare professionale"
        );

      let { data } = await response.json();
      if (songsMax && data.length > songsMax) {
        data = data.slice(0, 4);
        console.log("fatto.", data, data.length, songsMax);
      }
      dispatch(setSearchResults(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
