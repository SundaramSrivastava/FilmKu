import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {User} from './reducers/user.reducer'
import {Movies} from './reducers/movies.reducer'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

const appReducer = combineReducers({
    User,
    Movies
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const store = configureStore({
  reducer: rootReducer,
});