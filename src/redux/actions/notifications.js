import {UPDATE_BADGE_COUNT} from './types';

export function updateBadgeCount(badgeCount) {
  return {
    type: UPDATE_BADGE_COUNT,
    payload: badgeCount,
  };
}

export function fetchNotifications() {
  return dispatch => {
    return new Promise(() => {
      setTimeout(() => {
        dispatch(updateBadgeCount(3));
      }, 3000);
    });
  };
}
