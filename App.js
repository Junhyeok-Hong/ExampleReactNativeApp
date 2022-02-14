/*import LoginScreen from "./LoginScreen.js";
import ListScreen from "./ListScreen.js";
import AddNewPetScreen from "./AddNewPetScreen.js";
import ExamplePetProfileScreen from "./ExamplePetProfileScreen.js";

export default function App() {
  //return examplePetProfileScreen();
  //return AddNewPetScreen();
  //return LoginScreen();
  return ListScreen();
}
*/

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen.js";
import ListScreen from "./ListScreen.js";
import AddNewPetScreen from "./AddNewPetScreen.js";
import ExamplePetProfileScreen from "./ExamplePetProfileScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="AddNewPet" component={AddNewPetScreen} />
        <Stack.Screen
          name="ExamplePetProfile"
          component={ExamplePetProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/
