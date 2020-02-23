import { SEARCH_REQUEST, SEARCH_REQUEST_SUCCESS, SEARCH_REQUEST_FAIL } from './types';
import { getSearchResults } from './requests';

export const doSearch = search => dispatch => {
  dispatch({ type: SEARCH_REQUEST });

  return getSearchResults(search)
    .then(({ data }) => dispatch({ type: SEARCH_REQUEST_SUCCESS, payload: data }))
    .catch(({ response }) => dispatch({ type: SEARCH_REQUEST_FAIL, payload: response.data }));
};
