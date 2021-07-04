import React from "react";
import { View, Text } from "react-native";

export const ListArtist = ({ songs, handleOpenSong }) => {
  return (
    <View
      style={{
        marginTop: -80,
        marginHorizontal: 20,
        flex: 1,
        backgroundColor: "#23282c",
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          marginTop: 40,
          fontSize: 20,
          color: "white",
        }}
      >
        Chưa có nghệ sĩ nào
      </Text>
    </View>
  );
};
