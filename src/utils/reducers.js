import {
  SEARCH_MOVIES_START,
  SEARCH_MOVIES_NOT_FOUND,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  NOMINATE,
} from "./actions";

const INITIAL_STATE = {
  searching: false,
  error: "",
  searchResults: { Search: [] },
  nominations: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_START:
      return {
        ...state,
        searching: true,
        error: "",
        searchResults: INITIAL_STATE.searchResults,
      };
    case SEARCH_MOVIES_NOT_FOUND:
      return {
        ...state,
        searching: false,
        error: `We couldn't find any movie with your search: "${action.payload}". Try something different, perhaps?`,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        searching: false,
        error: "",
        searchResults: action.payload,
      };
    case SEARCH_MOVIES_ERROR:
      return {
        ...state,
        searching: false,
        error: "Error while searching, please try again.",
        searchResults: INITIAL_STATE.searchResults,
      };
    case NOMINATE:
      return {
        ...state,
        nominations: [...state.nominations, action.payload],
      };
    default:
      return state;
  }
};
