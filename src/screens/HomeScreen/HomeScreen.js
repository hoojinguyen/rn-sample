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

import { setData, getData } from "../../helper";

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, posts } = useSelector((state) => state.post);

  // Fetching
  useEffect(() => {
    const fetching = async () => {
      const data = await getData("hoi");
      console.log("HomeScreen ~ data", data);

      try {
        // const data = await getData("hoi");
        // console.log("HomeScreen ~ data", data);

        await dispatch(fetchPosts());
      } catch (err) {
        alert(err);
      }
    };
    fetching();
  }, []);

  //    Events
  const onChange = async () => {
    await dispatch(loadMorePosts());
  };

  // Render FlatList item
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>
          {parseInt(index) + 1}
          {". "}
          {item.title}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
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
      <View style={{ flex: 1, backgroundColor: "#F5F5F5", paddingTop: 20 }}>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item, index) => `flat_${index}`}
        />
        <Button onPress={onChange} title="Load more" color="#841584" />
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
  },

  row: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
  },

  description: {
    marginTop: 5,
    fontSize: 14,
  },
});
