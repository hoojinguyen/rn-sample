import React, { Component } from "react";
import { Provider } from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import { postReducer } from "./src/reducers";

import { HomeScreen } from "./src/screens/HomeScreen";

const rootReducer = combineReducers({
  post: postReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}
