import { HomeScreen } from "../screens/HomeScreen";
import { SongScreen } from "../screens/SongScreen";

import * as React from "react";
// import { Image, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const Root = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Product" component={ProductScreen} />
//       <Stack.Screen name="Transactions" component={TransactionScreen} />
//     </Stack.Navigator>
//   );
// };

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Song" component={SongScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
