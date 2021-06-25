import React, { Component } from "react";
import { Provider } from "react-redux";
import { AppLoading, Font } from 'expo';


import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import { postReducer } from "./src/reducers";

import { AppNavigator } from "./src/navigation/AppNavigator";

const rootReducer = combineReducers({
  post: postReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default class App extends Component {
  state = {
    theme: null,
    currentTheme: null,
    isReady: false,
  };

  // changeTheme = (theme, currentTheme) => {
  //   this.setState({ theme, currentTheme });
  // };

  async componentDidMount() {
    await Font.loadAsync(
      'antoutline',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    );

    await Font.loadAsync(
      'antfill',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );
    // eslint-disable-next-line
    this.setState({ isReady: true });
  }

  render() {
    const { theme, currentTheme, isReady } = this.state;
    if (!isReady) {
      return <AppLoading />;
    } else {
      return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      );
    }
  }
}
