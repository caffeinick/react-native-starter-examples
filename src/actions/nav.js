import * as types from './types';

export const navigateTo = (routeName, params = {}) => ({
  type: types.NAVIGATE_TO,
  payload: {
    routeName,
  },
  params,
});

export const navigatePop = () => ({
  type: types.NAVIGATE_POP,
});
