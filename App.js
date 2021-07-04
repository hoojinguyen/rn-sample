import React, { Component } from "react";
import { Provider } from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import { postReducer, songReducer } from "./src/reducers";

import { AppNavigator } from "./src/navigation/AppNavigator";

const rootReducer = combineReducers({
  post: postReducer,
  song: songReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
