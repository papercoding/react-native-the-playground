import {UPDATE_BADGE_COUNT} from '../actions/types';

export function badgeCount(state = 0, action) {
  return action.type === UPDATE_BADGE_COUNT ? action.payload : state;
}
