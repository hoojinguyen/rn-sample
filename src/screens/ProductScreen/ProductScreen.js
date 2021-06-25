import React, { useState, useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";

export const ProductScreen = ({ navigation, route }) => {
  // const { id, title } = route.params;

  const [count, setCount] = useState(1);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button
            onPress={() => setCount((c) => c + 1)}
            title="Update count"
            color="black"
          />
        );
      },
    });
  }, [navigation]);

  const backTo = () => {
    navigation.goBack();
  };

  const backHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Text>Day la screen Product</Text>
      <Text>Count: {count}</Text>
      <Button onPress={backTo} title="Back To"></Button>
      <Button onPress={backHome} title="Back Home"></Button>
    </View>
  );
};
