import { HomeScreen } from "../screens/HomeScreen";
import { ProductScreen } from "../screens/ProductScreen";
import { TransactionScreen } from "../screens/TransactionScreen";

import * as React from "react";
import { Image, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Transactions" component={TransactionScreen} />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Root" component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// const LogoTitle = () => {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require("../../assets/favicon.png")}
//     />
//   );
// };

// export const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: "#f4511e",
//           },
//           headerTintColor: "#fff",
//           headerTitleStyle: {
//             fontWeight: "bold",
//           },
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             // title: "My home",
//             headerTitle: (props) => <LogoTitle {...props} />,
//             // headerRight: () => (
//             //   <Button
//             //     onPress={() => alert("This is a button!")}
//             //     title="Info"
//             //     color="black"
//             //   />
//             // ),
//           }}
//         />
//         <Stack.Screen
//           name="Product"
//           component={ProductScreen}
//           options={({ route }) => ({ title: route.params.name })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
