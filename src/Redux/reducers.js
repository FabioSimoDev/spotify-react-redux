import {
  SET_SONGS,
  SET_ERROR,
  SET_PLAYING,
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  SET_LIKED_SONGS,
  REMOVE_LIKED_SONG
} from "./actions";

const initialState = {
  rock: [],
  pop: [],
  hipHop: [],
  playing: {},
  searchQuery: "",
  searchResults: { results: [] },
  liked: [],
  error: null
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        [action.payload.section]: action.payload.songs,
        error: null
      };
    case SET_PLAYING:
      return {
        ...state,
        playing: action.payload,
        error: null
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
        error: null
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
        error: null
      };
    case SET_LIKED_SONGS:
      return {
        ...state,
        liked: [...state.liked, action.payload],
        error: null
      };
    case REMOVE_LIKED_SONG:
      return {
        ...state,
        liked: state.liked.filter((song) => song.id !== action.payload.id),
        error: null
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default songsReducer;
