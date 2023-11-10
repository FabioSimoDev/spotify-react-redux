import {
  SET_SONGS,
  SET_ERROR,
  SET_PLAYING,
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS
} from "./actions";

const initialState = {
  rock: [],
  pop: [],
  hipHop: [],
  playing: {},
  searchQuery: "",
  searchResults: [],
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
        SET_SEARCH_RESULTS: action.payload,
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
