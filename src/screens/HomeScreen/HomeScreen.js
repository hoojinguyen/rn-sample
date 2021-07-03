import React, { useEffect, useState, useCallback } from "react";

import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Header, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../../reducers";

// import { setData, getData } from "../../helper";
import TabsView from "./TabsView";
import ListSong from "./ListSong";

const Page = styled(View)`
  margin-top: 20px;
`;

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [keySearch, setKeySearch] = useState("");
  const [tabSelected, setTabSelected] = useState("all");
  const { isLoading, songs } = useSelector((state) => state.song);

  useEffect(() => {
    const fetching = async () => {
      try {
        await dispatch(fetchSongs());
      } catch (err) {
        alert(err);
      }
    };
    fetching();
  }, []);

  //    Events
  // const onChange = async () => {
  //   const obj = { id: 1, title: "From home page with love", name: "T-shirt" };
  //   navigation.navigate("Song", obj);
  // };

  const handleChangeTab = useCallback((e) => {
    setTabSelected(e);
  }, []);

  const handleOpenSong = useCallback(({ song, position }) => {
    navigation.navigate("Song", { song, position });
  });

  if (isLoading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator animating={true} />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: "#343a40" }}>
        <Page />
        <View style={{ flex: 1, backgroundColor: "#343a40" }}>
          <Text>{keySearch}</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              marginHorizontal: 10,
              justifyContent: "space-between",
              paddingVertical: 10,
              marginBottom: 10,
            }}
          >
            <Input
              placeholder="Tìm kiếm bài hát"
              color="white"
              leftIcon={
                <Icon
                  name="search"
                  size={24}
                  color="#517fa4"
                  style={{ marginRight: 10 }}
                />
              }
              onChangeText={(value) => setKeySearch(value)}
            />
          </View>
          <TabsView
            tabSelected={tabSelected}
            handleChangeTab={handleChangeTab}
          />

          <ListSong songs={songs} handleOpenSong={handleOpenSong} />
        </View>
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
});
