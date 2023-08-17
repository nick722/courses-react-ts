// import { coursesInitialState } from './courses/reducer';
// import { createStore } from '@reduxjs/toolkit';
//
// const appInitialStore = {
// 	courses: coursesInitialState,
// };
// const store = createStore(rootReducer, appInitialStore);
//
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({ reducer: rootReducer });

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
