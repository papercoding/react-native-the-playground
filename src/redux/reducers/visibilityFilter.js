import {
  SET_VISIBILITY_FILTER,
  SHOW_COMPLETED,
} from '../actions/types/TodoFilters';

export const visibilityFilter = (state = SHOW_COMPLETED, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
