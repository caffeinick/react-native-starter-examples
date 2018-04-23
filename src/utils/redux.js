import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const addListener = createReduxBoundAddListener('root');

export { middleware, addListener, logger, ReduxThunk };
