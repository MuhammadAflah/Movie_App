// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './index';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './index';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;

