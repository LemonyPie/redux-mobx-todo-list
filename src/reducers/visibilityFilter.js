import { SET_SEARCH_TEXT_FILTER, SET_STATUS_FILTER_SHOW_ALL, SET_STATUS_FILTER_SHOW_COMPLETED, SET_STATUS_FILTER_SHOW_ACTIVE  } from "../actions/types";

const initialState = {
  searchText: '',
  status: 'ALL'
};

export default (state = initialState, action) => {
  switch(action.type){
    case SET_SEARCH_TEXT_FILTER:
      return {
        ...state,
        searchText: action.searchText
      };
    case SET_STATUS_FILTER_SHOW_ALL:
      return {
        ...state,
        status: 'ALL'
      };
    case SET_STATUS_FILTER_SHOW_COMPLETED:
      return {
        ...state,
        status: 'COMPLETED'
      };
    case SET_STATUS_FILTER_SHOW_ACTIVE:
      return {
        ...state,
        status: 'ACTIVE'
      };
    default:
      return state;
  }
}
