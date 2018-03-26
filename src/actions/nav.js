import * as types from './types';

export const navigateTo = (routeName) => ({
  type: types.NAVIGATE_TO,
  payload: {
    routeName: routeName
  },
});
