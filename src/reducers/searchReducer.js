import { GET_SONGS, NO_DATA } from "../types";

const initialState = {
  songs: [],
};
function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SONGS: {
      return { ...state, songs: action.payload };
    }
    case NO_DATA: {
      return initialState;
    }

    default:
      return state;
  }
}

export default searchReducer;
