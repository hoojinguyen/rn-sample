import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Button,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { fetchPosts, loadMorePosts } from "../../reducers";

// import { setData, getData } from "../../helper";

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, posts } = useSelector((state) => state.post);

  // Fetching
  useEffect(() => {
    const fetching = async () => {
      try {
        await dispatch(fetchPosts());
      } catch (err) {
        alert(err);
      }
    };
    fetching();
  }, []);

  //    Events
  const onChange = async () => {
    const obj = { id: 1, title: "From home page with love", name: "T-shirt" };
    navigation.navigate("Root", obj);
  };



  // Render
  if (isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator animating={true} />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: "#F5F5F5", paddingTop: 100 }}>
        <Button onPress={onChange} title="Go to" />
        <Button onPress={onChange} title="Go to 2" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  }
});
