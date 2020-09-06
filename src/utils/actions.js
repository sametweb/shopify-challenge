import { apiRequest } from "../OMDB";

export const SEARCH_MOVIES_START = "SEARCH_MOVIES_START";
export const SEARCH_MOVIES_NOT_FOUND = "SEARCH_MOVIES_NOT_FOUND";
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export const SEARCH_MOVIES_ERROR = "SEARCH_MOVIES_ERROR";
export const NOMINATE = "NOMINATE";

export const searchMovies = (params) => (dispatch) => {
  dispatch({ type: SEARCH_MOVIES_START });
  apiRequest(params)
    .get()
    .then((res) => {
      if (res.data.Response === "False") {
        dispatch({ type: SEARCH_MOVIES_NOT_FOUND, payload: params.s });
      } else {
        dispatch({ type: SEARCH_MOVIES_SUCCESS, payload: res.data });
      }
    })
    .catch((err) => {
      dispatch({ type: SEARCH_MOVIES_ERROR });
    });
};

export const nominate = (movie) => ({ type: NOMINATE, payload: movie });
