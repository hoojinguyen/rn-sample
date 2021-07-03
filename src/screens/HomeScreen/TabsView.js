import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function TabsView({ tabSelected, handleChangeTab }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#e12f81",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingBottom: 100,
        paddingTop: 10,
      }}
    >
      <TouchableOpacity onPress={() => handleChangeTab("all")}>
        <Text
          style={{
            color: tabSelected == "all" ? "black" : "white",
            fontWeight: tabSelected == "all" ? "bold" : "normal",
          }}
        >
          {" "}
          Danh sách nhạc{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleChangeTab("artist")}>
        <Text
          style={{
            color: tabSelected == "artist" ? "black" : "white",
            fontWeight: tabSelected == "artist" ? "bold" : "normal",
          }}
        >
          {" "}
          Nghệ sĩ{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleChangeTab("favorite")}>
        <Text
          style={{
            color: tabSelected == "favorite" ? "black" : "white",
            fontWeight: tabSelected == "favorite" ? "bold" : "normal",
          }}
        >
          {" "}
          Ds yêu thích{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
