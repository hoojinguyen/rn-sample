import React, { useState, useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";

export const TransactionScreen = ({ navigation, route }) => {
  const goto = () => {
    navigation.navigate("Product");
  };

  return (
    <View>
      <Text>Day la screen transaction</Text>
      <Button onPress={goto} title="Go to product"></Button>
    </View>
  );
};
