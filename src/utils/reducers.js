import {
  SEARCH_MOVIES_START,
  SEARCH_MOVIES_NOT_FOUND,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  NOMINATE,
  REMOVE_NOMINATION,
} from "./actions";

const NOMINATIONS = JSON.parse(localStorage.getItem("user_nominations"));

const INITIAL_STATE = {
  searching: false,
  error: "",
  searchResults: { Search: [] },
  nominations: NOMINATIONS || {},
};

export const reducer = (state = INITIAL_STATE, action) => {
  let newState = {};

  switch (action.type) {
    case SEARCH_MOVIES_START:
      newState = {
        ...state,
        searching: true,
        error: "",
      };
      return newState;
    case SEARCH_MOVIES_NOT_FOUND:
      newState = {
        ...state,
        searching: false,
        error: `We couldn't find anything with your search: "${action.payload}". Try something different, perhaps?`,
      };
      return newState;
    case SEARCH_MOVIES_SUCCESS:
      newState = {
        ...state,
        searching: false,
        error: "",
        searchResults: action.payload,
      };
      return newState;
    case SEARCH_MOVIES_ERROR:
      newState = {
        ...state,
        searching: false,
        error: "Error while searching, please try again.",
        searchResults: INITIAL_STATE.searchResults,
      };
      return newState;
    case NOMINATE:
      newState = {
        ...state,
        nominations: {
          ...state.nominations,
          [action.payload.imdbID]: action.payload,
        },
      };
      localStorage.setItem(
        "user_nominations",
        JSON.stringify(newState.nominations)
      );
      return newState;
    case REMOVE_NOMINATION:
      delete state.nominations[action.payload];
      newState = {
        ...state,
        nominations: { ...state.nominations },
      };
      localStorage.setItem(
        "user_nominations",
        JSON.stringify(newState.nominations)
      );
      return newState;
    default:
      return state;
  }
};
