import { GET_ARTIST, GET_SONG, GET_SONGS, NO_DATA } from "../types";

const initialState = {
  songs: [],
  artist: {},
  song: {},
};
function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SONGS: {
      return { ...state, songs: action.payload };
    }
    case GET_ARTIST: {
      return { ...state, artist: action.payload };
    }
    case GET_SONG: {
      return { ...state, song: action.payload };
    }
    case NO_DATA: {
      return initialState;
    }

    default:
      return state;
  }
}

export default searchReducer;
