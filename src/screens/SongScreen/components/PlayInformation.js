import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export const PlayInformation = ({
  nameSong,
  isFavoriteSong,
  handleChangeFavoriteSong,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15,
        marginHorizontal: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          alignSelf: "center",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {nameSong}
      </Text>

      <TouchableOpacity onPress={() => handleChangeFavoriteSong()}>
        <Icon
          name="heart"
          size={24}
          color={isFavoriteSong ? "#e12f81" : "white"}
          type="ionicon"
        ></Icon>
      </TouchableOpacity>
    </View>
  );
};
