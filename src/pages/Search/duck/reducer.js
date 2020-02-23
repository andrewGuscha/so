import { SEARCH_REQUEST, SEARCH_REQUEST_SUCCESS, SEARCH_REQUEST_FAIL } from './types';

const initialState = {
  loaded: false,
  loading: false,
  items: [],
  error: null,
};

export const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case SEARCH_REQUEST:
      return { ...state, loading: true, loaded: false, items: [], error: null };
    case SEARCH_REQUEST_SUCCESS:
      return { ...state, loading: false, loaded: true, items: action.payload.items };
    case SEARCH_REQUEST_FAIL:
      return { ...state, loading: false, loaded: false, error: action.payload };
    default: return state;
  }
};
